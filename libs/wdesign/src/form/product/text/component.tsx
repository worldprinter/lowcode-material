import React from 'react'

import { Text } from '@worldprinter/wdesign-core'
import type { TextProps } from '@worldprinter/wdesign-core'

import type { FormItemProps } from '../form-item'
import { useFormItemProps } from '../form-item'

export declare type FormTextProps = FormItemProps &
    TextProps & {
        text?: string
        width?: string
    }

export function FormText(props: FormTextProps) {
    const itemProps = useFormItemProps(props)

    const { text, lineClamp, size, color, truncate, styles, width, ...rest } = itemProps
    return (
        <Text
            {...(rest as any)}
            styles={styles}
            w={width || '100%'}
            truncate={truncate}
            c={color}
            size={size}
            lineClamp={lineClamp}
        >
            {text}
        </Text>
    )
}

// export const FormSelect = CheckForm(InnerSelect)
// export const FormSelectItem = withFormItem(FormSelect)
