import { BaseInputSetter, BaseRadioGroupSetter, FormItemSetter, NameSetter, setterOrderBy } from '../../../setter'

export const FormRadioMetadata = {
    title: '基本单选框',
    componentName: 'FormRadio',
    groupName: '原子组件',
    props: [NameSetter, ...BaseInputSetter],
    snippets: [
        {
            title: '基本单选框',
            snapshotText: 'Check',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
    ],
}

export const FormRadioItemMetadata = {
    title: '单选框',
    componentName: 'FormRadioItem',
    groupName: '报价表单',
    props: setterOrderBy([NameSetter, ...FormItemSetter, ...BaseInputSetter], ['title', 'description', 'placeholder']),
    snippets: [
        {
            title: '单选框',
            snapshotText: '单选框',
            category: '基础组件',
            schema: {
                props: {
                    title: '单选框',
                    checked: true,
                },
            },
        },
    ],
}

export const FormRadioGroupMetadata = {
    title: '基本单选框组',
    componentName: 'FormRadioGroup',
    groupName: '原子组件',
    props: [NameSetter, ...BaseRadioGroupSetter],
    snippets: [
        {
            title: '基本单选框组',
            snapshotText: 'CheckGroup',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
    ],
}

export const FormRadioGroupItemMetadata = {
    title: '单选组',
    componentName: 'FormRadioGroupItem',
    groupName: '报价表单',
    props: setterOrderBy(
        [NameSetter, ...FormItemSetter, ...BaseRadioGroupSetter],
        ['title', 'description', 'placeholder'],
    ),
    snippets: [
        {
            title: '单选组',
            snapshotText: '单选组',
            category: '基础组件',
            schema: {
                props: {
                    title: '单选组',
                },
            },
        },
    ],
}
