import {
    FormCheckbox,
    FormCheckboxGroup,
    FormCheckboxGroupItem,
    FormCheckboxGroupItemMetadata,
    FormCheckboxGroupMetadata,
    FormCheckboxItem,
    FormCheckboxItemMetadata,
    FormCheckboxMetadata,
} from './checkbox'
import { Form, FormMetadata } from './form'
import { FormItem, FormItemMetadata } from './form-item'
import { FormInput, FormInputItem, FormInputItemMetadata, FormInputMetadata } from './input'
import { FormLayout, FormLayoutMetadata } from './layout'
import { FormSelect, FormSelectItem, FormSelectItemMetadata, FormSelectMetadata } from './select'
import { FormText, FormTextMetadata } from './text'

export const ProductComponent = {
    FormInput,
    FormInputItem,
    FormCheckbox,
    FormCheckboxItem,
    FormCheckboxGroup,
    FormCheckboxGroupItem,
    FormSelect,
    FormSelectItem,
    Form,
    FormItem,
    FormLayout,
    FormText,
}

export const ProductMetadata = [
    FormInputMetadata,
    FormInputItemMetadata,
    FormMetadata,
    FormItemMetadata,
    FormLayoutMetadata,
    FormCheckboxMetadata,
    FormCheckboxItemMetadata,
    FormCheckboxGroupMetadata,
    FormCheckboxGroupItemMetadata,
    FormSelectMetadata,
    FormSelectItemMetadata,
    FormTextMetadata,
]
