/* eslint-disable @typescript-eslint/no-non-null-assertion */
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import weakMemoize from '@emotion/weak-memoize'
import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client'

import type { EnginContext, LayoutPropsType } from '@worldprinter/lowcode-engine'
import { DEFAULT_PLUGIN_LIST, Engine } from '@worldprinter/lowcode-engine'
import { ProductComponent, ProductMetadata } from '@worldprinter/lowcode-material-wdesign'
import * as CRender from '@worldprinter/lowcode-render'
import { Button, WDesignProvider } from '@worldprinter/wdesign-core'

import './app.css'

import { message } from 'antd'
import { NavLink } from 'react-router-dom'

// import Preview from './preview'

const win = window as any
win.React = React
win.ReactDOM = ReactDOM
win.ReactDOMClient = ReactDOMClient
win.CRender = CRender
win.__DEV__ = true
const beforeInitRender: LayoutPropsType['beforeInitRender'] = async ({ iframe }) => {
    const subWin = iframe.getWindow() as any
    if (!subWin) {
        return
    }

    subWin.React = React
    subWin.ReactDOM = ReactDOM
    subWin.ReactDOMClient = ReactDOMClient
    subWin.CRender = CRender
}

const EmotionProviderMeta = {
    title: 'provider',
    componentName: 'RootContainer',
    groupName: '原子组件',
    props: [],
    isContainer: true,
    snippets: [],
}

const customRender: LayoutPropsType['customRender'] = async ({
    iframe: iframeContainer,
    assets,
    page,
    pageModel,
    ready,
}) => {
    const iframeWindow = iframeContainer.getWindow()!
    const iframeDoc = iframeContainer.getDocument()!
    const IframeReact = iframeWindow.React!
    const IframeReactDOM = iframeWindow.ReactDOMClient!
    const CRender = iframeWindow.CRender!

    const memoizedCreateCacheWithContainer = weakMemoize((container: Node) => {
        return createCache({ container, key: 'iframe-cache' })
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
            const components = ProductComponent

            const App = IframeReact?.createElement(CRender.DesignRender, {
                adapter: CRender?.ReactAdapter,
                page: page,
                pageModel: pageModel,
                components: {
                    ...components,
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
            props: {},
            state: {},
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
            >
                <NavLink
                    to='/preview'
                    style={{ marginRight: '10px' }}
                >
                    Preview
                </NavLink>
                <Button
                    // type='primary'
                    onClick={() => {
                        const newPage = ctx.engine.pageModel.export()
                        localStorage.setItem('pageSchema', JSON.stringify(newPage))
                        message.success('Save successfully')
                    }}
                >
                    Save
                </Button>
            </div>,
        )
    }, [])

    if (!ready) {
        return <>loading...</>
    }

    return (
        <Engine
            plugins={DEFAULT_PLUGIN_LIST}
            schema={page as any}
            material={[...ProductMetadata, EmotionProviderMeta]}
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

export default Editor
