import { NameSetter } from '../../../setter'

export const FormLogicMetadata = {
    title: '逻辑',
    componentName: 'FormLogic',
    isContainer: true,
    groupName: '高级组件',
    props: [
        NameSetter,
        {
            name: 'exp',
            title: '表达式',
            valueType: 'string',
            setters: ['StringSetter'],
            defaultValue: '',
        },
        {
            name: 'expTrue',
            title: '表达式为真',
            valueType: 'object',
            setters: ['JSONSetter'],
            defaultValue: {},
        },
        {
            name: 'expFalse',
            title: '表达式为假',
            valueType: 'object',
            setters: ['JSONSetter'],
            defaultValue: {},
        },
    ],
    snippets: [
        {
            title: '逻辑组件',
            snapshotText: 'Logic',
            category: '高级组件',
            schema: {
                props: {
                    expTrue: {},
                    expFalse: {},
                },
            },
        },
    ],
}
