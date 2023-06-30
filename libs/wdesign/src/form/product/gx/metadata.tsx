import { FormItemSetter, GxSetter, NameSetter, setterOrderBy } from '../../../setter'

export const FormGxMetadata = {
    title: '工序组件',
    componentName: 'FormGx',
    isContainer: true,
    groupName: '报价表单',
    props: setterOrderBy([NameSetter, ...FormItemSetter, ...GxSetter], ['description', 'placeholder']),
    snippets: [
        {
            title: '工序',
            groupName: '报价表单',
            snapshotText: '布局',
            category: '基础组件',
            schema: {
                props: {
                    label: '工序',
                    checked: true,
                },
            },
        },
    ],
}
