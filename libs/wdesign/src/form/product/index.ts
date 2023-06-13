import { Form, FormMetadata } from './form'
import { FormItem, FormItemMetadata } from './form-item'
import { FormInput, FormInputItem, FormInputItemMetadata, FormInputMetadata } from './input'
import { FormLayout, FormLayoutMetadata } from './layout'

export const ProductComponent = { FormInput, FormInputItem, Form, FormItem, FormLayout }

export const ProductMetadata = [
    FormInputMetadata,
    FormInputItemMetadata,
    FormMetadata,
    FormItemMetadata,
    FormLayoutMetadata,
]
