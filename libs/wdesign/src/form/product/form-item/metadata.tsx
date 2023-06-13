import { FormItemSetter, NameSetter } from '../../../setter'

export const FormItemMetadata = {
    title: '表单项',
    componentName: 'FormItem',
    isContainer: true,
    groupName: '原子组件',
    props: [NameSetter, ...FormItemSetter],
    snippets: [
        {
            title: '表单项',
            snapshotText: '表单项',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
    ],
}
