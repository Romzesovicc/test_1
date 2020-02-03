import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.scss';

const ServiceCenter = ({
  isError, isFormSent, validate, handleEmailChange, email,
}) => (
  <div className={classNames('d-flex mx-auto flex-column', styles.serviceCenterBlock)}>
    <div>
      <h2>What do they do at service centers to factory reset Android phone remotely?</h2>
    </div>
    <div>
      <p>
          Not everyone is ready to spend precious time waiting for the technician to come over and unlock the phone.
        <b>The modern market deals</b>
        {' '}
          with that problem offering a number of services that will remove FRP from your
          Android device remotely.
      </p>
    </div>
    <div className={classNames('d-flex align-items-center justify-content-around', styles.choise)}>
      <div className='d-flex align-items-center'>1</div>
      <div>
        <p>
            Choose the amount of connections and install a special software application –
          {' '}
          <b>ProductName.</b>
            Register an account by clicking ‘Sign up’ link. It is a normal registration procedure.
        </p>
      </div>
    </div>
    <div className={classNames('d-flex align-items-center justify-content-around', styles.productName)}>
      <div className='d-flex align-items-center'>2</div>
      <div>
        <p>Launch ProductName and sign into account.</p>
      </div>
    </div>
    <div className={classNames('d-flex align-items-center justify-content-around', styles.choise)}>
      <div className='d-flex align-items-center'>3</div>
      <div>
        <p>
            You should install ProductName on remote computer, where the phone is physically attached,
            and local machine which will connect to the device.
        </p>
      </div>
    </div>
    <div className={classNames('d-flex align-items-center', styles.note)}>
      <p>
        <b>Note:</b>
        {' '}
          ProductName is not the software solution to reset Google FRP. You need the help of Service Center,
          like SupportKing or the third-party software, to do it. ProductName is for remote access to devices only!
      </p>
    </div>
    <div className={styles.androidfactory}>
      <p>Once Android factory reset is done, the phone owner can login using his Google account credentials.</p>
    </div>
    <div className={styles.ifYouWant}>
      <p>
          If you want to know how to bypass FRP with a PC on Samsung devices, you should also know that it doesn’t
          differ from FRP Google Account removal on Lenovo, Asus, and HTC devices. Android factory reset protection
          can help a user set up his phone like it is new and use another account to work with the device.
      </p>
    </div>
    <div className={classNames('d-flex align-items-center justify-content-around', styles.getStartToday)}>
      <div>
        <h2>Start your free trial Today</h2>
        <p>
            7-day Trial
          <b>•</b>
          {' '}
            Cancel anytime.
        </p>
      </div>
      <div className={classNames(styles.getStarTodaytInputButton)}>
        <form className={styles.form}>
          <div className={classNames('d-inline-flex', styles.getStartMobile)}>
            <input
              type='text'
              name='email'
              value={email}
              onChange={handleEmailChange}
              disabled={isFormSent}
              placeholder='Your email address'
              className={classNames({ [styles.inputError]: isError })}
            />
            <button disabled={isFormSent} onClick={validate}>Get started</button>
          </div>
          <p className={classNames(styles.errorBlock, { [styles.error]: isError })}>
              You entered the email incorrectly
          </p>
        </form>
      </div>
    </div>
    <div className={styles.ifYouWant}>
      <p>
          Most of us would probably go to a service center to get this problem solved, and that is reasonable.
          This is because service centers’ specialists know how to bypass Google Account on the Android phone, but
          it means you have to take your device to them.
      </p>
    </div>
    <div className={styles.ifYouWant}>
      <p>
          Remote debugging means that you use your local debugging tool to correct the defective code
          running on a remote machine.
      </p>
    </div>
  </div>
);

ServiceCenter.propTypes = {
  isError: PropTypes.bool.isRequired,
  isFormSent: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
};

export default ServiceCenter;
