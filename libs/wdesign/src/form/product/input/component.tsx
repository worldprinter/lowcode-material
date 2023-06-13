import React from 'react'

import { Input } from '@worldprinter/wdesign-core'

import { withItem } from '../../shared/withItem'

// import { ProductFormItemComponent } from '../formitem'

// const InnerProductInputComponent: React.FC<any> = (props) => {
//     console.log('ProductInputComponent', props)

//     useField()
//     return <Input />
// }

const InnerProductInputComponent: React.FC<any> = (props) => {
    console.log('ProductInputComponent', props)

    return <Input {...props} />
}
const ProductInputComponent = withItem(InnerProductInputComponent)
ProductInputComponent.displayName = 'ProductInputComponent'

export { ProductInputComponent }
