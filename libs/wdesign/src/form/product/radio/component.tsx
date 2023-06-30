import React from 'react'

import { useField } from '@worldprinter/formeasy'
import type { RadioGroupProps, RadioProps } from '@worldprinter/wdesign-core'
import { Box, Group, Radio, Stack } from '@worldprinter/wdesign-core'

import type { FormItemProps } from '../form-item'
import { useFormItemProps, useSplitFieldProps, withFormItem } from '../form-item'
import { CheckForm } from '../shard'

type RadioGroupDataItem = {
    label: string
    value: string
}
export declare type FormRadioProps = FormItemProps & RadioProps
export declare type FormRadioGroupProps = FormItemProps &
    RadioGroupProps & {
        data: Array<RadioGroupDataItem>
        itemDirection: 'vertical' | 'horizontal'
        itemSpacing: string
    }

export function InnerRadio(props: FormRadioProps) {
    const itemProps = useFormItemProps(props)
    const [fieldProps, radioProps] = useSplitFieldProps(itemProps)
    const [{ value }, , { setValue, setTouched }] = useField(fieldProps)

    return (
        <Radio
            {...radioProps}
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

export function InnerRadioGroup(props: FormRadioGroupProps) {
    const itemProps = useFormItemProps(props)
    const [fieldProps, radioGroupProps] = useSplitFieldProps(itemProps)
    const [{ value }, , { setValue, setTouched }] = useField(fieldProps)

    return (
        <Radio.Group
            {...(radioGroupProps as any)}
            value={value}
            onFocus={() => {
                setTouched(true, true)
            }}
            onChange={(v) => {
                setValue(v)
            }}
        >
            <GroupWrapper
                itemDirection={radioGroupProps.itemDirection}
                itemSpacing={radioGroupProps.itemSpacing}
            >
                {radioGroupProps.data?.map(({ label, value }: RadioGroupDataItem) => (
                    <Radio
                        label={label}
                        value={value}
                    />
                ))}
            </GroupWrapper>
        </Radio.Group>
    )
}

export const FormRadio = CheckForm(InnerRadio)
export const FormRadioItem = withFormItem(FormRadio)

export const FormRadioGroup = CheckForm(InnerRadioGroup)
export const FormRadioGroupItem = withFormItem(FormRadioGroup)
