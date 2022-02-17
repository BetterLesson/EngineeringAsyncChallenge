import { FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'

export default function FormField({ renderField, name, helperText = '', label = '', ...rest }) {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        const { error, touched } = meta
        return (
          <div>
            <FormControl id={name} isInvalid={error && touched} {...rest}>
              {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
              {renderField({ field, form, meta })}
              <FormErrorMessage>{error}</FormErrorMessage>
              {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
          </div>
        )
      }}
    </Field>
  )
}
