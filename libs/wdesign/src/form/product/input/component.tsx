import React from 'react'

import { useField } from '@worldprinter/formeasy'
import type { InputProps } from '@worldprinter/wdesign-core'
import { Input } from '@worldprinter/wdesign-core'

import type { FormItemProps } from '../form-item'
import { useFormItemProps, useSplitFieldProps, withFormItem } from '../form-item'
import { CheckForm } from '../shard'

export declare type FormInputProps = FormItemProps & InputProps

export function InnerInput(props: FormInputProps) {
    const itemProps = useFormItemProps(props)
    const [fieldProps, inputProps] = useSplitFieldProps(itemProps)
    const [{ value }, , { setValue, setTouched }] = useField(fieldProps)

    return (
        <Input
            {...inputProps}
            value={value}
            onFocus={() => {
                setTouched(true, true)
            }}
            onChange={(v: React.ChangeEvent<HTMLInputElement>) => {
                setValue(v.target.value)
            }}
        />
    )
}

export const FormInput = CheckForm(InnerInput)
export const FormInputItem = withFormItem(FormInput)
