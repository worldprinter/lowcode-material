import { namePropsMeta } from '../../../customMetadata/nameSetter'

export const ProductInputMetadata = {
    title: 'Input组件',
    componentName: 'ProductInputComponent',
    groupName: '原子组件',
    props: [namePropsMeta],
    snippets: [
        {
            title: 'Input组件',
            snapshotText: 'Input',
            category: '基础组件',
            schema: {
                props: {
                    // name: 'email',
                },
            },
        },
    ],
}
