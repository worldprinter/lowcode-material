import { get } from 'lodash'

import type { MaterialPropType } from '@worldprinter/lowcode-model'

export const CommonSetters: MaterialPropType[] = [
    {
        name: 'title',
        title: '标题',
        valueType: 'string',
        setters: ['StringSetter'],
    },
    {
        name: 'description',
        title: '描述',
        valueType: 'string',
        setters: ['StringSetter'],
        defaultValue: '描述',
    },
    {
        name: 'layout',
        title: '对齐方式',
        valueType: 'string',
        setters: [
            {
                componentName: 'SelectSetter',
                props: {
                    options: [
                        {
                            value: 'vertical',
                            label: '水平',
                        },
                        {
                            value: 'horizontal',
                            label: '垂直',
                        },
                    ],
                },
            },
        ],
        defaultValue: 'horizontal',
    },
    {
        name: 'labelPosition',
        title: '布局方式',
        valueType: 'string',
        setters: [
            {
                componentName: 'SelectSetter',
                props: {
                    options: [
                        {
                            value: 'left',
                            label: 'left',
                        },
                        {
                            value: 'top',
                            label: 'top',
                        },
                    ],
                },
            },
        ],
        defaultValue: 'top',
    },
    {
        name: 'layoutSpacing',
        title: '标题间距',
        valueType: 'string',
        setters: ['StringSetter', 'NumberSetter'],
        defaultValue: 'md',
    },
    {
        name: 'labelWidth',
        title: '标题宽度',
        valueType: 'string',
        setters: ['StringSetter', 'NumberSetter'],
        condition: (state: any) => {
            return get(state, 'labelPosition') === 'left'
        },
        defaultValue: '120px',
    },
    {
        name: 'showDescription',
        title: '描述内容',
        valueType: 'boolean',
        setters: ['BooleanSetter'],
        defaultValue: true,
    },
    {
        name: 'showValidation',
        title: '验证显示',
        valueType: 'boolean',
        setters: ['BooleanSetter'],
        defaultValue: true,
    },
    {
        name: 'inherit',
        title: '是否继承父设置',
        valueType: 'boolean',
        setters: ['BooleanSetter'],
        defaultValue: true,
    },
    {
        name: 'placeholder',
        title: '占位符',
        valueType: 'string',
        setters: ['StringSetter'],
        defaultValue: '请输入',
    },
    {
        name: 'validate',
        title: '验证规则',
        valueType: 'string',
        setters: [
            {
                componentName: 'SelectSetter',
                props: {
                    options: [
                        {
                            value: 'required',
                            label: '必填',
                        },
                        {
                            value: 'email',
                            label: '邮箱',
                        },
                        {
                            value: 'phone',
                            label: '手机号',
                        },
                        {
                            value: 'url',
                            label: '网址',
                        },
                        {
                            value: 'number',
                            label: '数字',
                        },
                        {
                            value: 'integer',
                            label: '整数',
                        },
                        {
                            value: 'float',
                            label: '浮点数',
                        },
                        {
                            value: 'regex',
                            label: '正则',
                        },
                    ],
                },
            },
        ],
        defaultValue: 'horizontal',
    },
    {
        name: 'validateMessage',
        title: '验证提示',
        valueType: 'string',
        setters: ['StringSetter'],
        defaultValue: '未通过验证',
    },
    {
        name: 'validateRegex',
        title: '验证正则',
        valueType: 'string',
        setters: ['StringSetter'],
        defaultValue: '请输入',
        condition: (state: any) => {
            return get(state, 'validate') === 'regex'
        },
    },
    {
        name: 'disabled',
        title: '禁用',
        valueType: 'boolean',
        setters: ['BooleanSetter'],
        defaultValue: false,
    },
    {
        name: 'readonly',
        title: '只读',
        valueType: 'boolean',
        setters: ['BooleanSetter'],
        defaultValue: false,
    },
    {
        name: 'hidden',
        title: '隐藏',
        valueType: 'boolean',
        setters: ['BooleanSetter'],
        defaultValue: false,
    },
    {
        name: 'required',
        title: '必填',
        valueType: 'boolean',
        setters: ['BooleanSetter'],
        defaultValue: false,
    },
]
