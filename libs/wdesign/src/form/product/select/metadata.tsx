import { BaseSelectSetter, FormItemSetter, NameSetter, setterOrderBy } from '../../../setter'

export const FormSelectMetadata = {
    title: '基本下拉框',
    componentName: 'FormSelect',
    groupName: '原子组件',
    props: [NameSetter, ...BaseSelectSetter],
    snippets: [
        {
            title: '下拉框',
            snapshotText: 'Select',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
    ],
}

export const FormSelectItemMetadata = {
    title: '下拉框',
    componentName: 'FormSelectItem',
    groupName: '报价表单',
    props: setterOrderBy([NameSetter, ...FormItemSetter, ...BaseSelectSetter], ['title', 'description', 'placeholder']),
    snippets: [
        {
            title: '下拉框',
            snapshotText: '下拉框',
            category: '基础组件',
            schema: {
                props: {
                    title: '下拉框',
                    data: [],
                },
            },
        },
    ],
}
