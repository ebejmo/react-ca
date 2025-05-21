/* eslint-disable import/no-extraneous-dependencies */
import * as yup from 'yup';

const contactSchema = yup.object({
  fullName: yup
    .string()
    .min(3, 'Full name must be at least 3 characters')
    .required('Full name is required'),
  subject: yup
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .required('Subject is required'),
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Email is required'),
  body: yup
    .string()
    .min(3, 'Message must be at least 3 characters')
    .required('Message is required'),
});

export default contactSchema;
