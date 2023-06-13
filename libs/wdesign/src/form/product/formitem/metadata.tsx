import { namePropsMeta } from '../../../customMetadata/nameSetter'

export const ProductFormItemMetadata = {
    title: 'FormItem',
    componentName: 'ProductFormItemComponent',
    isContainer: true,
    groupName: '原子组件',
    props: [namePropsMeta],
    snippets: [
        {
            title: 'FormItem',
            snapshotText: 'FormItem',
            category: '基础组件',
            schema: {
                props: {
                    name: '',
                },
            },
        },
    ],
}
