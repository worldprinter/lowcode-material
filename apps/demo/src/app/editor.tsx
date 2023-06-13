import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import weakMemoize from '@emotion/weak-memoize'
import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client'

import './index.css'

import { set } from 'lodash'

import type { EnginContext, LayoutPropsType } from '@worldprinter/lowcode-engine'
import { collectVariable, DEFAULT_PLUGIN_LIST, Engine, flatObject } from '@worldprinter/lowcode-engine'
import { ProductComponent, ProductMetadata } from '@worldprinter/lowcode-material-wdesign'
import * as CRender from '@worldprinter/lowcode-render'
import { useEmotionCache, WDesignProvider } from '@worldprinter/wdesign-core'

const win = window as any
win.React = React
win.ReactDOM = ReactDOM
win.ReactDOMClient = ReactDOMClient
set(window, '__DEV__', true)
const beforeInitRender: LayoutPropsType['beforeInitRender'] = async ({ iframe }) => {
    const subWin = iframe.getWindow() as any
    if (!subWin) {
        return
    }

    subWin.React = React
    subWin.ReactDOM = ReactDOM
    subWin.ReactDOMClient = ReactDOMClient
}

const EmotionProviderMeta = {
    title: 'provider',
    componentName: 'RootContainer',
    groupName: '原子组件',
    props: [],
    isContainer: true,
    snippets: [
        {
            title: 'provider',
            snapshotText: 'Check',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
    ],
}

const customRender: LayoutPropsType['customRender'] = async ({
    iframe: iframeContainer,
    assets,
    page,
    pageModel,
    ready,
}) => {
    // await iframeContainer.injectJS('http://localhost:4173/index.umd.js');
    const iframeWindow = iframeContainer.getWindow()!
    const iframeDoc = iframeContainer.getDocument()!
    const IframeReact = iframeWindow.React!
    const IframeReactDOM = iframeWindow.ReactDOMClient!
    // const CRender = iframeWindow.CRender!;

    const memoizedCreateCacheWithContainer = weakMemoize((container: Node) => {
        console.log('createCache', container)
        const newCache = createCache({ container, key: 'ifranmecache' })
        return newCache
    })

    const RootContainer = ({ children }: any) => {
        const cache = memoizedCreateCacheWithContainer(iframeDoc.head)
        return (
            <CacheProvider value={cache}>
                <WDesignProvider
                    emotionCache={cache}
                    withCSSVariables
                    withGlobalStyles
                    withNormalizeCSS
                >
                    {children}
                </WDesignProvider>
            </CacheProvider>
        )
    }

    // 注入组件物料资源
    const assetLoader = new CRender.AssetLoader(assets, {
        window: iframeContainer.getWindow()!,
    })
    await assetLoader
        .onSuccess(() => {
            const componsnts = ProductComponent.reduce((acc, cur) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                acc[cur.displayName] = cur
                return acc
            }, {} as any)

            // 从子窗口获取物料对象
            const componentCollection = collectVariable(assets, iframeWindow)
            const components = flatObject(componentCollection)

            const App = IframeReact?.createElement(CRender.DesignRender, {
                adapter: CRender?.ReactAdapter,
                page: page,
                pageModel: pageModel,
                components: {
                    ...componsnts,
                    RootContainer,
                },
                onMount: (designRenderInstance) => {
                    ready(designRenderInstance)
                },
            })

            IframeReactDOM.createRoot(iframeDoc.getElementById('app')!).render(App)
        })
        .onError(() => {
            console.log('资源加载出粗')
        })
        .load()
}
export const Editor = () => {
    const [ready, setReady] = useState(false)
    const [page, setPage] = useState({
        version: '1.0.0',
        name: 'BaseDemoPage',
        componentsMeta: [],
        componentsTree: {
            componentName: 'RootContainer',
            props: {
                a: 1,
            },
            state: {
                b: 2,
                buttonVisible: true,
                modalVisible: false,
            },
            configure: {
                propsSetter: {},
                advanceSetter: {},
            },
            children: [],
        },
        assets: [],
    })

    useEffect(() => {
        const localPage = localStorage.getItem('pageSchema')
        if (localPage) {
            setPage(JSON.parse(localPage))
        }
        setReady(true)
    }, [])
    const onReady = useCallback(async (ctx: EnginContext) => {
        const designer = await ctx.pluginManager.onPluginReadyOk('Designer')
        const reloadPage = async () => {
            setTimeout(() => {
                // const designerExports = designer?.exports as any;
                // console.log('to reload');
                // designerExports.reload();
            }, 0)
        }

        const workbench = ctx.engine.getWorkbench()

        workbench?.replaceTopBarView(
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '10px',
                }}
            ></div>,
        )
    }, [])

    if (!ready) {
        return <>loading...</>
    }

    return (
        <Engine
            plugins={DEFAULT_PLUGIN_LIST}
            schema={page as any}
            // 传入组件物料
            material={[...ProductMetadata, EmotionProviderMeta]}
            // 组件物料对应的 js 运行库，只能使用 umd 模式的 js
            assetPackagesList={[]}
            beforePluginRun={({ pluginManager }) => {
                pluginManager.customPlugin('Designer', (pluginInstance) => {
                    pluginInstance.ctx.config.beforeInitRender = beforeInitRender
                    pluginInstance.ctx.config.customRender = customRender
                    return pluginInstance
                })
            }}
            onReady={onReady}
        />
    )
}
