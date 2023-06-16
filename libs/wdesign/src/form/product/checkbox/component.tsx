import React from 'react'

import { useField } from '@worldprinter/formeasy'
import type { CheckboxGroupProps, CheckboxProps } from '@worldprinter/wdesign-core'
import { Box, Checkbox, Group, Stack } from '@worldprinter/wdesign-core'

import type { FormItemProps } from '../form-item'
import { useFormItemProps, useSplitFieldProps, withFormItem } from '../form-item'
import { CheckForm } from '../shard'

type CheckboxGroupDataItem = {
    label: string
    value: string
}
export declare type FormCheckboxProps = FormItemProps & CheckboxProps
export declare type FormCheckboxGroupProps = FormItemProps &
    CheckboxGroupProps & {
        data: Array<CheckboxGroupDataItem>
        itemDirection: 'vertical' | 'horizontal'
        itemSpacing: string
    }

export function InnerCheckbox(props: FormCheckboxProps) {
    const itemProps = useFormItemProps(props)
    const [fieldProps, checkboxProps] = useSplitFieldProps(itemProps)
    const [{ value }, , { setValue, setTouched }] = useField(fieldProps)

    return (
        <Checkbox
            {...checkboxProps}
            checked={value}
            onFocus={() => {
                setTouched(true, true)
            }}
            onChange={(v: React.ChangeEvent<HTMLInputElement>) => {
                setValue(v.currentTarget.checked)
            }}
        />
    )
}

const GroupWrapper = ({
    children,
    ...props
}: React.PropsWithChildren<{ itemDirection: 'vertical' | 'horizontal'; itemSpacing: string }>) => {
    return (
        <Box>
            {props.itemDirection === 'vertical' ? (
                <Stack spacing={props.itemSpacing}>{children}</Stack>
            ) : (
                <Group spacing={props.itemSpacing}>{children}</Group>
            )}
        </Box>
    )
}

export function InnerCheckboxGroup(props: FormCheckboxGroupProps) {
    const itemProps = useFormItemProps(props)
    const [fieldProps, checkboxGroupProps] = useSplitFieldProps(itemProps)
    const [{ value }, , { setValue, setTouched }] = useField(fieldProps)

    console.log(checkboxGroupProps.data)

    return (
        <Checkbox.Group
            {...(checkboxGroupProps as any)}
            value={value}
            onFocus={() => {
                setTouched(true, true)
            }}
            onChange={(v) => {
                setValue(v)
            }}
        >
            <GroupWrapper
                itemDirection={checkboxGroupProps.itemDirection}
                itemSpacing={checkboxGroupProps.itemSpacing}
            >
                {checkboxGroupProps.data?.map(({ label, value }: CheckboxGroupDataItem) => (
                    <Checkbox
                        label={label}
                        value={value}
                    />
                ))}
            </GroupWrapper>
        </Checkbox.Group>
    )
}

export const FormCheckbox = CheckForm(InnerCheckbox)
export const FormCheckboxItem = withFormItem(FormCheckbox)

export const FormCheckboxGroup = CheckForm(InnerCheckboxGroup)
export const FormCheckboxGroupItem = withFormItem(FormCheckboxGroup)
