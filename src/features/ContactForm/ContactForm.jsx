/* eslint-disable import/no-extraneous-dependencies, jsx-a11y/label-has-associated-control, react/jsx-props-no-spreading */

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useId } from 'react';
import contactSchema from '../../validation/contactSchema';
import UserFeedback from '../../components/UserFeedback/UserFeedback';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import ContactFormInputs from './ContactFormInputs';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const nameId = useId();
  const subjectId = useId();
  const emailId = useId();
  const bodyId = useId();

  function onSubmit(data) {
    console.log('Contact Form Submitted:', data);
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setShowForm(false);
      setIsSubmitted(true);
      reset();
    }, 1200);
  }

  return (
    <div className={styles.contactWrapper}>
      <h1>Contact Us</h1>

      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className={styles.form}
        >
          <ContactFormInputs
            register={register}
            errors={errors}
            nameId={nameId}
            subjectId={subjectId}
            emailId={emailId}
            bodyId={bodyId}
          />
          <Button
            type="submit"
            variant="primary"
            size="small"
            disabled={isSubmitting || isSending}
          >
            {isSubmitting || isSending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
      {isSending && <Spinner size="large" />}

      {isSubmitted && !isSending && (
        <UserFeedback
          type="success"
          message="Thanks for reaching out! We'll get back to you soon."
        />
      )}
    </div>
  );
}
