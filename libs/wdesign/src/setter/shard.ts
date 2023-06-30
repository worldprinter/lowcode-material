import type { MaterialPropType } from '@worldprinter/lowcode-model'

import { CommonSetters } from './common'

export function setterOrderBy<T extends MaterialPropType>(setters: MaterialPropType[], pickList: Array<String>) {
    return setters.sort((a, b) => {
        return pickList.indexOf(a.name) - pickList.indexOf(b.name)
    })
}

export function getCommonSetters(...pickList: Array<(typeof CommonSetters)[number]['name']>) {
    return setterOrderBy(
        // @ts-ignore
        CommonSetters.filter((i) => pickList.includes(i.name)),
        pickList,
    )
}

export const LayoutSetter = getCommonSetters(
    'layout',
    'layoutSpacing',
    'labelPosition',
    'labelWidth',
    'showValidation',
    'inherit',
)

export const FormItemSetter = [
    ...getCommonSetters(
        'title',
        'labelPosition',
        'labelWidth',
        'showValidation',
        'validate',
        'showDescription',
        'description',
    ),
]

export const BaseInputSetter = [
    ...getCommonSetters('placeholder', 'disabled', 'readonly', 'required', 'hidden', 'size', 'variant'),
]

export const GxSetter = [
    ...getCommonSetters('placeholder', 'disabled', 'readonly', 'required', 'hidden', 'size', 'variant'),
]

export const BaseSelectSetter = [
    ...getCommonSetters(
        'data',
        'defaultValue',
        'placeholder',
        'disabled',
        'required',
        'hidden',
        'size',
        'variant',
        'searchable',
    ),
]

export const BaseCheckboxGroupSetter = [
    ...getCommonSetters(
        'data',
        'defaultValue',
        'disabled',
        'required',
        'hidden',
        'size',
        'variant',
        'itemDirection',
        'itemSpacing',
    ),
]

export const BaseRadioGroupSetter = [
    ...getCommonSetters(
        'data',
        'defaultValue',
        'disabled',
        'required',
        'hidden',
        'size',
        'variant',
        'itemDirection',
        'itemSpacing',
    ),
]

export const BaseTextSetter = [
    ...getCommonSetters('text', 'width', 'disabled', 'hidden', 'size', 'truncate', 'lineClamp', 'color'),
]
