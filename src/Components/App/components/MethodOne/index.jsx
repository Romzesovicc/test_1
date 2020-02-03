import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import FormEmail from '../../common/FormEmail';


const MethodOne = () => {
  const iconStar = <img src='assets/img/star-solid.svg' alt='Star' />;

  return (
    <div className={classNames('d-flex mx-auto justify-content-start flex-column', styles.maskContainer)}>
      <div className={classNames('d-flex flex-start align-items-center mx-auto ')}>
        <div className={classNames('mx-auto')}>
          Method 1: Simplest way to get help
          with Android phone reset
        </div>
      </div>
      <div className={classNames('d-flex align-items-center justify-content-center')}>
        <div className={classNames('d-flex flex-column', styles.logoContainer)}>
          <img src='assets/img/logoLarge@2x.png' alt='Logo' />
          <h2>ProductName #1</h2>
          <p>Share USB over IP network and access remote     USB and serial devices from anywhere!</p>
          <p>
            The easiest way will be to use ProductName, an app that lets you access and share remote USB devices
            over IP. Figure out how to share scanner between two computers with ProductName help.
          </p>
        </div>
        <div className={classNames(styles.templateImg)}>
          <img src='assets/img/tempateOneImage@2x.png' alt='Template' />
        </div>
      </div>
      <FormEmail />
      <div className={classNames('d-flex justify-content-between', styles.iconBlock, styles.icoBlockMobi)}>
        <div className={styles.starIco}>
          <div className='d-flex'>
            {iconStar}
            {iconStar}
            {iconStar}
            {iconStar}
            {iconStar}
            <p>4.5 rank based on 988 users</p>
          </div>
          <div>
            <p>
Windows XP and later, OS X 10.9+, Ubuntu 14.04+,
              <br />
Android 4.0 and above.
            </p>
          </div>
        </div>
        <div className='d-inline-flex'>
          <p>Already a ProductName user?</p>
          <button>Sign In →</button>
        </div>
      </div>

    </div>

  );
};


export default MethodOne;
