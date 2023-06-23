import { get, omit, pick } from 'lodash'
import React from 'react'

import { useField } from '@worldprinter/formeasy'
import type { FieldValidator } from '@worldprinter/formeasy/src/formik/types'
import { Input, rem } from '@worldprinter/wdesign-core'

import type { FormLayoutProps } from '../layout'
import { useSplitLayoutProps } from '../layout'
import { CheckForm } from '../shard'

export declare type BaseFormItemProps = {
    name: string
    type?: string
    value?: any
}

export declare type FormItemProps = BaseFormItemProps &
    FormLayoutProps & {
        title?: string
        description?: string
        showDescription?: boolean
    }

export function useSplitFieldProps<T>(props: FormItemProps & T) {
    return React.useMemo(() => {
        const baseProps = pick(props, [
            'name',
            'type',
            'value',
            'validation',
            'description',
            'showDescription',
        ]) as BaseFormItemProps

        return [
            baseProps,
            omit(props, ['name', 'type', 'value', 'validation', 'description', 'showDescription']) as T,
        ] as const
    }, [props])
}

export const FormItemContext = React.createContext<BaseFormItemProps | undefined>(undefined)
export const FormItemProvider = FormItemContext.Provider

export function useFormItemProps<T>(props: BaseFormItemProps & T) {
    const contextProps = React.useContext(FormItemContext)

    return {
        ...contextProps,
        ...props,
    }
}

const regMap = {
    required: /.+/g,
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g,
    phone: /^1[3456789]\d{9}$/g,
    url: /^((https|http|ftp|rtsp|mms)?:\/\/)\S+/g,
    number: /^\d+$/g,
    integer: /^[-+]?\d+$/g,
    float: /^[-+]?\d+(\.\d+)?$/g,
}

const sizes = {
    xs: rem(30),
    sm: rem(36),
    md: rem(42),
    lg: rem(50),
    xl: rem(60),
}

const validateHandler = (
    validation: string | FieldValidator,
    validateMessage: string & {} = '验证失败',
    validateRegex?: RegExp,
) => {
    if (validation === 'regex' && validateRegex) {
        return (value: string) => {
            if (!validateRegex.test(value)) {
                return validateMessage
            }
        }
    } else if (validation !== 'regex' && typeof validation === 'string') {
        const reg = regMap[validation as keyof typeof regMap]
        if (reg) {
            return (value: string) => {
                if (!reg.test(value)) {
                    return validateMessage
                }
            }
        }
    }
}

function InnerFormItem({
    children,
    validate: validation,
    validateMessage,
    validateRegex,
    description,
    showDescription,
    ...props
}: React.PropsWithChildren<
    FormItemProps & { validate?: string | FieldValidator; validateMessage?: string; validateRegex?: RegExp }
>) {
    // 分离出 布局 和 表单项 的 props
    const [layoutProps, itemProps] = useSplitLayoutProps(props)
    // 分理处 表单项 和 UI 的 props
    const [fieldProps, uiProps] = useSplitFieldProps(itemProps)
    const validate = validation ? validateHandler(validation, validateMessage, validateRegex) : undefined

    const [field, meta] = useField({
        ...fieldProps,
        validate,
    })

    console.log('fieldProps', fieldProps)

    return (
        <Input.Wrapper
            inputWrapperOrder={['label', 'input', 'description', 'error']}
            styles={{
                labelWrapper: {
                    width: layoutProps.labelWidth,
                },
            }}
            {...layoutProps}
            {...uiProps}
            labelPosition={layoutProps.labelPosition}
            label={uiProps.title}
            error={meta.error}
            description={showDescription && description}
        >
            <FormItemProvider value={fieldProps}>{children}</FormItemProvider>
        </Input.Wrapper>
    )
}

export const FormItem = CheckForm(InnerFormItem)

export function withFormItem<T>(Component: React.FC<BaseFormItemProps & T>) {
    const WrapperItem = React.memo((props: BaseFormItemProps & T) => {
        const itemProps = useFormItemProps(props)
        return <Component {...itemProps} />
    })
    const TInnerFormItem: React.FC<FormItemProps & T> = (props) => {
        return (
            <FormItem {...props}>
                <WrapperItem {...(props as any)} />
            </FormItem>
        )
    }

    TInnerFormItem.displayName = `FormItem(${Component.displayName || Component.name})`
    return TInnerFormItem
}
