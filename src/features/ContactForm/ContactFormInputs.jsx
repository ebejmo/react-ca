/* eslint-disable import/no-extraneous-dependencies, jsx-a11y/label-has-associated-control, react/jsx-props-no-spreading */
import styles from './ContactForm.module.scss';

export default function ContactFormInputs({
  register,
  errors,
  nameId,
  subjectId,
  emailId,
  bodyId,
}) {
  return (
    <>
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
    </>
  );
}
