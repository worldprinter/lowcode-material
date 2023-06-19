import { BaseTextSetter } from '../../../setter'

export const FormTextMetadata = {
    title: '文本',
    componentName: 'FormText',
    groupName: '原子组件',
    props: [...BaseTextSetter],
    snippets: [
        {
            title: '文本',
            snapshotText: '文本',
            category: '基础组件',
            schema: {
                props: {
                    text: '文本',
                },
            },
        },
        {
            title: '文本',
            groupName: '报价表单',
            snapshotText: '文本',
            category: '基础组件',
            schema: {
                props: {
                    text: '文本',
                },
            },
        },
    ],
}
