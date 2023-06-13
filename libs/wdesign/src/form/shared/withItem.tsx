import React from 'react'

import { useField, useFormikContext } from '@worldprinter/formeasy'
import { Alert } from '@worldprinter/wdesign-core'

import { ProductFormItemComponent } from '../product/formitem'

export function withItem(Component: React.ComponentType<any>) {
    return React.memo((props: any) => {
        const form = useFormikContext()
        console.log('form', form)
        console.log('itemProps', props)

        const [field] = useField(props)
        console.log('useField', field)

        if (!form) return <Alert>需要在Form容器组件中渲染</Alert>
        if (!props.name) return <Alert>需要在组件中传入name属性</Alert>
        return (
            <ProductFormItemComponent>
                <Component
                    {...field}
                    {...props}
                />
            </ProductFormItemComponent>
        )
    })
}
