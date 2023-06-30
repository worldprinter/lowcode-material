import React from 'react'

import { useField } from '@worldprinter/formeasy'
import type { CheckboxProps } from '@worldprinter/wdesign-core'
import { Checkbox, Group } from '@worldprinter/wdesign-core'

import type { FormItemProps } from '../form-item'
import { useFormItemProps, useSplitFieldProps, withFormItem } from '../form-item'
import { CheckForm } from '../shard'

export declare type FormGxProps = FormItemProps & CheckboxProps & { children: React.ReactNode }

export function InnerGx({ children, ...props }: FormGxProps) {
    const itemProps = useFormItemProps(props)
    const [fieldProps, checkboxProps] = useSplitFieldProps(itemProps)
    const [{ value }, , { setValue, setTouched }] = useField(fieldProps)

    console.log(checkboxProps, 'checkboxProps')
    return (
        <Group>
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
            {children}
        </Group>
    )
}

export const FormGx = withFormItem(CheckForm(InnerGx))
