import { omit, pick } from 'lodash'
import React from 'react'

import { Group, Stack } from '@worldprinter/wdesign-core'

import type { LayoutOptions } from './context'
import { LayoutProvider, useLayoutContext } from './context'

export declare type FormLayoutProps = LayoutOptions & {
    inherit?: boolean
}

export function useSplitLayoutProps<T extends Record<string, any>>(props: T & FormLayoutProps) {
    return React.useMemo(() => {
        return [
            pick(props, [
                'labelWidth',
                'labelPosition',
                'layout',
                'layoutSpacing',
                'showDescription',
                'showValidation',
            ]) as FormLayoutProps,
            omit(props, [
                'labelWidth',
                'labelPosition',
                'layout',
                'layoutSpacing',
                'showDescription',
                'showValidation',
            ]) as T,
        ] as const
    }, [props])
}

export function useLayoutProps(props: FormLayoutProps) {
    const contextProps = useLayoutContext()
    if (props.inherit) {
        return {
            ...contextProps,
            ...props,
        }
    }
    return props
}

function InnerLayoutComponent({ children, ...props }: React.PropsWithChildren<LayoutOptions>) {
    const layoutProps = useLayoutProps(props)

    return (
        <LayoutProvider value={layoutProps}>
            {layoutProps.layout === 'vertical' ? (
                <Stack spacing={layoutProps.layoutSpacing}>{children}</Stack>
            ) : (
                <Group spacing={layoutProps.layoutSpacing}>{children}</Group>
            )}
        </LayoutProvider>
    )
}

export const FormLayout = InnerLayoutComponent
