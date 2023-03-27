import React, {FC} from 'react'
import {Button, Container, TextField} from '@mui/material'
import {RoutesPaths} from '@/router/utils'
import {useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {FeedbackForm} from '@/pages/feedback/types'



const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  text: Yup.string().required('Required')
})

const initialValues: FeedbackForm = {
  name: '',
  text: ''
}


const Feedback: FC = () => {
  const navigate = useNavigate()
  const {t} = useTranslation()

  const handleSubmit = (values: FeedbackForm, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    if (values.name === '' || values.text === '') return
    alert(`name: ${values.name}, text: ${values.text}`)
    values.name = ''
    values.text = ''
    setSubmitting(false)
  }

  return (
    <Container maxWidth="md" style={{paddingTop: '20px'}}>
      <Button onClick={() => navigate(RoutesPaths.catalog)}>{t('common.backToCatalog')}</Button>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Field
                name="name"
                as={TextField}
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <Field
                name="text"
                as={TextField}
                label="Text"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.text && Boolean(errors.text)}
                helperText={touched.text && errors.text}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ mt: 3 }}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default Feedback
