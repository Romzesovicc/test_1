import React from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';


const HowToReset = () => (
  // eslint-disable-next-line react/jsx-filename-extension,max-len
  <main className={classNames('d-flex justify-content-center align-items-center mx-auto align-self-center flex-column', styles.main)}>
    <div className={classNames('d-flex flex-column align-items-center', styles.background)}>
      <p>How to reset Android phone remotely</p>
      <div className={classNames('d-flex align-items-center', styles.avatar)}>
        <img src='assets/img/avatarImage@2x.png' alt='Avatar_user' />
        <p className='ml-auto mr-auto mt-0 mb-0'>Olga Weis • 16 May, 2018</p>
      </div>
    </div>
    <div className={classNames('mb-24 d-flex justify-content-center flex-column', styles.androidInfo)}>
      <h2>How to reset Android phone remotely</h2>
      <p>
        Factory Reset Protection is a part of Device Protection, a feature added by Google in March 2015 for Android
        devices with 5.1 and later versions. If your phone has this feature enabled – most probably it does – you can
        factory reset an Android phone only under the login credentials you used when the device was new.
      </p>
      <p>
        This functionality is basically meant to keep thieves off your phone – even if someone gets hold of it,
        they won’t be able to wipe it clean and sell it off without knowing your login credentials.
      </p>
      <div>
        <div className={classNames(styles.features)}>
        However, as it is always the case with security features, Factory Reset Protection can become either your best
        friend or your greatest enemy.
        </div>
      </div>
      <p>
        Considering the number of accounts, passwords and PINs we use every day, it is highly possible that one day
        you might just forget what Google account you used when setting up your phone.
      </p>
      <p>
        Considering the number of accounts, passwords and PINs we use every day, it is highly possible that one day you
        might just forget what Google account you used when setting up your phone.
      </p>
      <p>
        Or, say, you bought a used phone and the previous user did not remove google account from Android. What do you
        do then? How to remove a google account from Android? Is there a way to bypass Google account verification?
      </p>
      <h3>How to bypass FRP?</h3>
      <p className='mb-0'>
        Not everyone is ready to spend precious time waiting for the technician to come over and unlock the phone.
        <b>The modern market deals</b>
        {' '}
        with that problem offering a number of services that will remove FRP from your Android
        device remotely.
      </p>
    </div>
  </main>
);

export default HowToReset;
