import React from 'react'

import { useField } from '@worldprinter/formeasy'
import type { CheckboxProps } from '@worldprinter/wdesign-core'
import { Checkbox } from '@worldprinter/wdesign-core'

import type { FormItemProps } from '../form-item'
import { useFormItemProps, useSplitFieldProps, withFormItem } from '../form-item'
import { CheckForm } from '../shard'

export declare type FormCheckboxProps = FormItemProps & CheckboxProps

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

export const FormCheckbox = CheckForm(InnerCheckbox)
export const FormCheckboxItem = withFormItem(FormCheckbox)
