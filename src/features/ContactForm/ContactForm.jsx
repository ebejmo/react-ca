/* eslint-disable import/no-extraneous-dependencies, jsx-a11y/label-has-associated-control, react/jsx-props-no-spreading */

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useId } from 'react';
import contactSchema from '../../validation/contactSchema';
import styles from './ContactForm.module.scss';
import UserFeedback from '../../components/UserFeedback/UserFeedback';
import Button from '../../components/Button/Button';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(true);
    reset();
  }

  return (
    <div className={styles.contactWrapper}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.field}>
          <label htmlFor={nameId}>Full Name</label>
          <input id={nameId} {...register('fullName')} />
          <p className={styles.error}>{errors.fullName?.message}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={subjectId}>Subject</label>
          <input id={subjectId} {...register('subject')} />
          <p className={styles.error}>{errors.subject?.message}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={emailId}>Email</label>
          <input id={emailId} type="email" {...register('email')} />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={bodyId}>Message</label>
          <textarea id={bodyId} rows="5" {...register('body')} />
          <p className={styles.error}>{errors.body?.message}</p>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="small"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      {isSubmitted && (
        <UserFeedback
          type="success"
          message="Thanks for reaching out! We'll get back to you soon."
        />
      )}
    </div>
  );
}
