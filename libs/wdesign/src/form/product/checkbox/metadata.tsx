import { BaseInputSetter, FormItemSetter, NameSetter, setterOrderBy } from '../../../setter'

export const FormCheckboxMetadata = {
    title: '基本多选框',
    componentName: 'FormCheckbox',
    groupName: '原子组件',
    props: [NameSetter, ...BaseInputSetter],
    snippets: [
        {
            title: '基本多选框',
            snapshotText: 'Check',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
    ],
}

export const FormCheckboxItemMetadata = {
    title: '多选框',
    componentName: 'FormCheckboxItem',
    groupName: '报价表单',
    props: setterOrderBy([NameSetter, ...FormItemSetter, ...BaseInputSetter], ['title', 'description', 'placeholder']),
    snippets: [
        {
            title: '多选框',
            snapshotText: '多选框',
            category: '基础组件',
            schema: {
                props: {
                    title: '多选框',
                    checked: true,
                },
            },
        },
    ],
}
