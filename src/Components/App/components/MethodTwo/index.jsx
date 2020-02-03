import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';


const MethodTwo = () => {
  const iconStar = <img src='assets/img/star-solid2.svg' alt='Star' />;

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
          <h2>ProductName #2</h2>
          <p>Share USB over Ethernet for Windows</p>
          <p>
            ProductName is a software that helps you access USB devices as if they were directly connected to your
            machine. The way it works is pretty similar to ProductName.
          </p>
          <button>Get in now</button>
          <div className={classNames(styles.starIco, 'd-flex flex-column')}>
            <div className='d-inline-flex align-items-center'>
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
        </div>
        <div className={classNames(styles.templateImg)}>
          <img src='assets/img/tempateTwoImage@2x.png' alt='Template_two' />
        </div>
      </div>


    </div>

  );
};


export default MethodTwo;
