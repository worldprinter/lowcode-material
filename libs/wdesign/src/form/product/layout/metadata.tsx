import { LayoutSetter } from '../../../setter'

export const FormLayoutMetadata = {
    title: '表单布局',
    componentName: 'FormLayout',
    isContainer: true,
    groupName: '原子组件',
    props: [...LayoutSetter],
    snippets: [
        {
            title: '布局',
            snapshotText: '布局',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
        {
            title: '布局',
            groupName: '报价表单',
            snapshotText: '布局',
            category: '基础组件',
            schema: {
                props: {},
            },
        },
    ],
}
