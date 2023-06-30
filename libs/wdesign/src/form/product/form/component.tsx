import React, { useContext, useEffect } from 'react'

import type { FormikHelpers } from '@worldprinter/formeasy'
import { FormikProvider, useFormik } from '@worldprinter/formeasy'

import { RenderFormContext } from '../../../index'

const InnerForm: React.FC<any> = (props) => {
    const formik = useFormik({
        initialValues: {},
        validateOnBlur: true,
        validateOnChange: true,
        validateOnMount: true,
        onSubmit<Values>(values: Values, formikHelpers: FormikHelpers<Values>): void {
            console.log(values, formikHelpers)
        },
    })

    const { formData, setFormData } = useContext<Record<string, any>>(RenderFormContext)

    useEffect(() => {
        if (setFormData) {
            setFormData({
                ...formData,
                [props.name]: formik.values,
            })
        }
    }, [formik.values])

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>{props.children}</form>
        </FormikProvider>
    )
}

InnerForm.displayName = 'Form'

export const Form = InnerForm
