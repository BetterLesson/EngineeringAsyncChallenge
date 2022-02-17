import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  useToast
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { FiMail, FiUser } from 'react-icons/fi'
import * as yup from 'yup'

import FormField from './FormField'

const validationSchema = yup.object().shape({
  name: yup.string().required('Your name is required.'),
  email: yup.string().email('Your email is not valid.').required('Your email is required.'),
  industry: yup.string().required('Please select an industry.')
})

let timer

export default function MailingListForm() {
  const toast = useToast()

  const handleMailingListSubmit = (values, { setSubmitting, resetForm }) => {
    toast.closeAll()
    clearTimeout(timer)
    timer = setTimeout(() => {
      setSubmitting(false)
      resetForm()
      toast({
        title: 'Success!',
        description: `We've recieved your information, thank you ${values.name}!`,
        status: 'success',
        duration: 7000,
        variant: 'subtle',
        position: 'top-right',
        isClosable: true
      })
    }, 1000)
    console.log(values)
  }

  return (
    <Box mt={8}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          industry: 'e-sports'
        }}
        onSubmit={handleMailingListSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, ...rest }) => {
          const { isSubmitting } = rest
          return (
            <Form noValidate onSubmit={handleSubmit} autoComplete="off">
              <SimpleGrid columns={1} rowGap={4} columnGap={4} width="full" mb={8}>
                {/* NAME */}
                <FormField
                  label="*Name"
                  name="name"
                  renderField={({ field }) => (
                    <InputGroup>
                      <InputLeftElement children={<Icon as={FiUser} />} />
                      <Input
                        name="name"
                        type="text"
                        value={field.value}
                        disabled={isSubmitting}
                        variant="filled"
                        placeholder="Jane Doe"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  )}
                />
                {/* EMAIL */}
                <FormField
                  label="*Email"
                  name="email"
                  renderField={({ field }) => (
                    <InputGroup>
                      <InputLeftElement children={<Icon as={FiMail} />} />
                      <Input
                        name="email"
                        type="email"
                        value={field.value}
                        disabled={isSubmitting}
                        variant="filled"
                        placeholder="jane_doe@email.com"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  )}
                />
                {/* INDUSTRY */}
                <FormField
                  label="*Industry"
                  name="industry"
                  renderField={({ field }) => (
                    <Select
                      name="industry"
                      variant="filled"
                      placeholder="Industry"
                      value={field.value}
                      disabled={isSubmitting}
                      onChange={handleChange}
                    >
                      <option value="professional-services">Professional Services</option>
                      <option value="sports-fitness">Sports/Fitness</option>
                      <option value="e-sports">E-Sports</option>
                    </Select>
                  )}
                />
              </SimpleGrid>

              <Box mt={8}>
                <Button
                  leftIcon={<FiMail />}
                  colorScheme="primary"
                  variant="solid"
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Send Message
                </Button>
              </Box>
            </Form>
          )
        }}
      </Formik>
    </Box>
  )
}
