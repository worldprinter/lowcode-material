import { namePropsMeta } from '../../../customMetadata/nameSetter'

export const ProductLogicMetadata = {
    title: 'Logic组件',
    componentName: 'ProductLogicComponent',
    isContainer: true,
    groupName: '原子组件',
    props: [namePropsMeta],
    snippets: [
        {
            title: 'Logic组件',
            snapshotText: 'Logic',
            category: '基础组件',
            schema: {
                props: {
                    name: '',
                },
            },
        },
    ],
}
