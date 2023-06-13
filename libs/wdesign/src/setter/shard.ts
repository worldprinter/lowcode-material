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
    'showDescription',
    'showValidation',
    'inherit',
)

export const FormItemSetter = [
    ...getCommonSetters('title', 'description'),
    ...getCommonSetters('labelPosition', 'labelWidth', 'showDescription', 'showValidation'),
]

export const BaseInputSetter = [...getCommonSetters('placeholder')]
