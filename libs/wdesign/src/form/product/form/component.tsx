import { FormikProvider, useFormik } from '@worldprinter/formeasy'

const InnerProductFormComponent: React.FC<any> = (props) => {
    const formik = useFormik({
        initialValues: {
            name: 'xn',
            phone: '1111111111',
            email: '111111@xx.com',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
        watch: {
            email: (value, formValue) => {
                formValue.phone = value + '@xxx.com'
            },
        },
    })
    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>{props.children}</form>
        </FormikProvider>
    )
}

InnerProductFormComponent.displayName = 'ProductFormComponent'
export const ProductFormComponent = InnerProductFormComponent
