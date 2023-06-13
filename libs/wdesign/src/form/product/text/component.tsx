import React from 'react'

import { Text } from '@worldprinter/wdesign-core'

const InnerProductTextComponent: React.FC<any> = (props) => {
    console.log('ProductInputComponent', props)
    return <Text>Text</Text>
}

InnerProductTextComponent.displayName = 'ProductTextComponent'
export const ProductTextComponent = InnerProductTextComponent
