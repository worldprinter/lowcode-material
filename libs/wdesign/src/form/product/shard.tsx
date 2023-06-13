import { omit } from 'lodash'
import React from 'react'

import { useFormikContext } from '@worldprinter/formeasy'
import { Alert } from '@worldprinter/wdesign-core'

import type { FormItemProps } from './form-item'
import { useFormItemProps } from './form-item'

// 名称正则，不能以数字开头，只能包含数字、字母、下划线
const nameRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/

export function CheckForm<T>(Component: React.FC<React.PropsWithChildren<FormItemProps & T>>) {
    return function CheckName(props: React.PropsWithChildren<FormItemProps & T>) {
        const form = useFormikContext()
        // 从 FormItem 中提取 name
        const fullProps = useFormItemProps(props)
        const nameChecked = !!(fullProps.name && nameRegex.test(fullProps.name))

        if (!nameChecked)
            return (
                <Alert
                    title='无法渲染！'
                    color='red'
                >
                    名称不能为空，或不符合规则（不能以数字开头，只能包含数字、字母、下划线）
                </Alert>
            )
        if (!form)
            return (
                <Alert
                    title='无法渲染！'
                    color='red'
                >
                    请将组件放在 表单 组件内
                </Alert>
            )
        return <Component {...(omit(fullProps, 'children') as any)}>{fullProps.children}</Component>
    }
}
