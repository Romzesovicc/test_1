import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const FormEmail = () => {
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [isFormSent, setFormSent] = useState(false);

  const validate = useCallback((e) => {
    e.preventDefault();
    const adrPattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    if (adrPattern.test(email) === false) {
      setError(true);
    } else {
      setError(false);
      setFormSent(true);
      alert('Ваш mail успешно отправлен');
    }
  }, [setError, setFormSent, email]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail]);

  return (
    <div className={classNames('d-flex align-items-center justify-content-around', styles.getStarted)}>
      <div>
        <h2>Start your free trial Today</h2>
        <p>
          7-day Trial
          <b>•</b>
          {' '}
          Cancel anytime.
        </p>
      </div>
      <div className={styles.getStartedInputButton}>
        <form className={styles.form}>
          <div className={classNames(styles.mobile, 'd-inline-flex')}>
            <input
              type='text'
              name='email'
              placeholder='Your email address'
              value={email}
              onChange={handleEmailChange}
              disabled={isFormSent}
              className={classNames({ [styles.inputError]: isError })}
            />
            <button onClick={validate} disabled={isFormSent}>Get started</button>
          </div>
          <p className={classNames(styles.errorBlock, { [styles.error]: isError })}>
            You entered the email incorrectly
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormEmail;
