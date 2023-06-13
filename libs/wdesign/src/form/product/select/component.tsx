import React from 'react'

import { Select } from '@worldprinter/wdesign-core'

const InnerProductSelectComponent: React.FC<any> = (props) => {
    return (
        <Select
            label='Your favorite framework/library'
            placeholder='Pick one'
            data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
            ]}
        />
    )
}

InnerProductSelectComponent.displayName = 'ProductSelectComponent'
export const ProductSelectComponent = InnerProductSelectComponent
