import React from 'react'

export declare type LayoutOptions = {
    labelWidth: string | number
    labelPosition: 'left' | 'top'
    layout: 'vertical' | 'horizontal'
    layoutSpacing: string | number
    showValidation: boolean
    labelHeight: string
}

export const LayoutContext = React.createContext<LayoutOptions>({
    labelWidth: 'max-content',
    labelPosition: 'left',
    layout: 'vertical',
    layoutSpacing: 'md',
    // description: undefined,
    // showDescription: true,
    showValidation: true,
})

export const LayoutProvider = LayoutContext.Provider

export function useLayoutContext() {
    return React.useContext(LayoutContext)
}
