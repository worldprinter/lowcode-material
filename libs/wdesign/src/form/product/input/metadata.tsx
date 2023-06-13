import { BaseInputSetter, FormItemSetter, NameSetter, setterOrderBy } from '../../../setter'

export const FormInputMetadata = {
    title: '基本输入框',
    componentName: 'FormInput',
    groupName: '原子组件',
    props: [NameSetter, ...BaseInputSetter],
    snippets: [
        {
            title: '输入框',
            snapshotText: 'Input',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
    ],
}

export const FormInputItemMetadata = {
    title: '输入框',
    componentName: 'FormInputItem',
    groupName: '报价表单',
    props: setterOrderBy([NameSetter, ...FormItemSetter, ...BaseInputSetter], ['title', 'description', 'placeholder']),
    snippets: [
        {
            title: '输入框',
            snapshotText: '输入框',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
    ],
}
