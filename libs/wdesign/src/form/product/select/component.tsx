import React from 'react'

import { useField } from '@worldprinter/formeasy'
import type { SelectProps } from '@worldprinter/wdesign-core'
import { Select } from '@worldprinter/wdesign-core'

import type { FormItemProps } from '../form-item'
import { useFormItemProps, useSplitFieldProps, withFormItem } from '../form-item'
import { CheckForm } from '../shard'

export declare type FormSelectProps = FormItemProps & SelectProps

export function InnerSelect(props: FormSelectProps) {
    const itemProps = useFormItemProps(props)
    const [fieldProps, selectProps] = useSplitFieldProps(itemProps)
    const [{ value }, , { setValue, setTouched }] = useField(fieldProps)

    console.log('fieldProps', fieldProps)
    console.log('selectProps', selectProps)

    return (
        <Select
            {...(selectProps as any)}
            value={value}
            data={selectProps.data ?? []}
            onFocus={() => {
                setTouched(true, true)
            }}
            onChange={(v: string) => {
                setValue(v)
            }}
            defaultValue={selectProps.defaultValue ?? ''}
            searchable={selectProps.searchable ?? false}
        />
    )
}

export const FormSelect = CheckForm(InnerSelect)
export const FormSelectItem = withFormItem(FormSelect)
