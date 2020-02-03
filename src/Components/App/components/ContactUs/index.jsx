import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const iconHeard = <img src='assets/img/heart-regular.svg' alt='Heard' />;
const icoShare = <img src='assets/img/share-square-solid.svg' alt='Share' />;
const icoQuestion = <img src='assets/img/question.svg' alt='Share' />;
const icoEnvelope = <img src='assets/img/envelope.svg' alt='Envelope' />;
const icoDisqus = (
  <img
    style={{ width: '25px', height: '25px', marginRight: '0' }}
    src='https://upload.wikimedia.org/wikipedia/commons/a/ae/Disqus_d_icon_%28gray%29.svg'
    alt='Disqus'
  />
);

const ContactUs = () => {
  const icoLock = <img src='assets/img/lock.svg' alt='Lock' />;

  return (
    <div className={classNames(styles.formBlock, 'd-flex mx-auto')}>
      <div className={classNames(styles.formContainer, 'd-flex flex-column')}>
        <div className={classNames('d-flex justify-content-between align-items-center', styles.border)}>
          <div className={styles.comments}>
            <p className='mb-0'>0 Comments</p>
          </div>
          <div className={styles.select}>
            <p>1</p>
            <select>
              <option value='Login'>Login</option>
              <option value='Logout'>Logout</option>
            </select>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className={styles.sortBy}>
            <p className='mb-0 d-flex align-items-center'>
              {iconHeard}
              {' '}
              Recommended
            </p>
            <p>
              {icoShare}
               Share
            </p>
          </div>
          <div className={classNames(styles.selectTwo)}>
            <select>
              <option value='Sort by Newest'>Sort by Newest</option>
            </select>
          </div>
        </div>
        <div className={classNames('d-flex', styles.startDiscussion)}>
          <img src='assets/img/user.jpg' alt='User' />
          <input placeholder='Start the discussion...' />
        </div>

        <div className={classNames(styles.socialBlock, 'd-flex align-items-center justify-content-between')}>
          <div className={classNames(styles.social, 'd-flex flex-column')}>
            <p>Log in with</p>
            <div className='d-flex align-items-center'>
              <img
                className={styles.disqus}
                src='https://c.disquscdn.com/next/ec5d6eb/marketing/assets/img/brand/disqus-social-icon-blue-white.svg'
                alt='Disqus'
              />
              <div
                style={{ backgroundColor: '#0331fc' }}
                className={classNames('mr-2 d-flex align-items-center justify-content-center', styles.socialIco)}
              >
                <img src='assets/img/facebook.svg' alt='Facebook' />
              </div>
              <div className={classNames('mr-2 d-flex align-items-center justify-content-center', styles.socialIco)}>
                <img src='assets/img/twitter.svg' alt='Twitter' />
              </div>
              <div
                style={{ backgroundColor: '#fc1c03' }}
                className={classNames('mr-2 d-flex align-items-center justify-content-center', styles.socialIco)}
              >
                <img src='assets/img/google.svg' alt='Google' />
              </div>
            </div>
          </div>
          <div className={styles.inputName}>
            <p className='d-flex align-items-center'>
               Or sign up width disqus
              {icoQuestion}
              {' '}
            </p>
            <input placeholder='Name' />
          </div>
        </div>
        <div className={classNames(styles.commentBlock, 'd-flex justify-content-center align-items-end')}>
          <p>
             Be the first to comment
          </p>
        </div>
        <div className={styles.commentIco}>
          <div className='d-flex '>
            <p className='mr-4'>
              {' '}
              {icoEnvelope}
              {' '}
              Subscribe
            </p>
            <p className='mr-4'>
              {icoDisqus}
              {' '}
              Add Disqus to your site
            </p>
            <p className='mr-4'>
              {icoLock}
              {' '}
               Disqus&apos; Privacy Policy
            </p>
          </div>
          <div className='d-flex align-items-center'>
            <h2>Disqus</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
