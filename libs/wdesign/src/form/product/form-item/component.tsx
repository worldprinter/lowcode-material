import { isNumber, omit, pick } from 'lodash'
import React from 'react'

import { useField } from '@worldprinter/formeasy'
import type { FieldValidator } from '@worldprinter/formeasy/src/formik/types'
import { Box, Group, rem, Stack } from '@worldprinter/wdesign-core'

import type { FormLayoutProps } from '../layout'
import { useSplitLayoutProps } from '../layout'
import { CheckForm } from '../shard'

export declare type BaseFormItemProps = {
    name: string
    type?: string
    value?: any
    validation?: string | FieldValidator
}

export declare type FormItemProps = BaseFormItemProps &
    FormLayoutProps & {
        title?: string
        description?: string
    }

export function useSplitFieldProps<T>(props: FormItemProps & T) {
    return React.useMemo(() => {
        const baseProps = pick(props, ['name', 'type', 'value', 'validation']) as BaseFormItemProps
        return [baseProps, omit(props, ['name', 'type', 'value', 'validation']) as T] as const
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

function InnerFormItem({ children, ...props }: React.PropsWithChildren<FormItemProps>) {
    // 分离出 布局 和 表单项 的 props
    const [layoutProps, itemProps] = useSplitLayoutProps(props)
    // 分理处 表单项 和 UI 的 props
    const [fieldProps, uiProps] = useSplitFieldProps(itemProps)
    const [field, meta] = useField(fieldProps)

    const Label = () => {
        return (
            <Box
                component={'label'}
                htmlFor={field.name}
                sx={() => ({
                    width:
                        layoutProps.labelPosition === 'top'
                            ? 'inherit'
                            : isNumber(layoutProps.labelWidth)
                            ? rem(layoutProps.labelWidth)
                            : layoutProps.labelWidth,
                })}
            >
                {uiProps.title}
            </Box>
        )
    }

    const MetaInfo = () => {
        return (
            <Box>
                {layoutProps.showDescription && uiProps.description && (
                    <Box
                        component={'span'}
                        sx={{ color: 'gray' }}
                    >
                        {uiProps.description}
                    </Box>
                )}
                {meta.error && meta.touched && (
                    <Box
                        component={'span'}
                        sx={{ color: 'red' }}
                    >
                        {meta.error}
                    </Box>
                )}
            </Box>
        )
    }

    if (layoutProps.labelPosition === 'top') {
        return (
            <Stack>
                <Label />
                <Box>
                    <FormItemProvider value={fieldProps}>{children}</FormItemProvider>
                    <MetaInfo />
                </Box>
            </Stack>
        )
    }

    return (
        <Group>
            <Label />
            <Box>
                <FormItemProvider value={fieldProps}>{children}</FormItemProvider>
                <MetaInfo />
            </Box>
        </Group>
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
