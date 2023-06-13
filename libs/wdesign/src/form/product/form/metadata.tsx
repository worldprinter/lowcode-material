import { namePropsMeta } from '../../../customMetadata/nameSetter'

export const ProductFormMetadata = {
    title: 'Form组件',
    componentName: 'ProductFormComponent',
    isContainer: true,
    groupName: '原子组件',
    props: [namePropsMeta],
    snippets: [
        {
            title: 'Form组件',
            snapshotText: 'Form',
            category: '基础组件',
            schema: {
                props: {
                    name: '',
                },
            },
        },
    ],
}
