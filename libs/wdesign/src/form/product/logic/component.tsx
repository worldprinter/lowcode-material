import React from 'react'

import { Logic } from '@worldprinter/formeasy'

import type { BaseFormItemProps } from '../form-item'
import { CheckForm } from '../shard'

export declare type FormLogicProps<T extends Record<string, any> = Record<string, any>> = BaseFormItemProps & {
    exp: string
    expTrue?: Partial<T>
    expFalse?: Partial<T>
}

function InnerFormLogic({ children, ...props }: React.PropsWithChildren<FormLogicProps>) {
    return <Logic {...props}>{children}</Logic>
}

export const FormLogic = CheckForm(InnerFormLogic)
