import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const TopBar = ({
  isError, isFormSent, validate, handleEmailChange, email,
}) => {
  const [isMobile, setMobile] = useState(false);

  const openMenu = useCallback(() => {
    if (isMobile === false) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [isMobile]);

  return (
    <header className={`${styles.header} d-flex  align-items-center align-self-center justify-content-around`}>
      <div className={`d-flex align-items-center ${styles.headerMobi}`}>
        <div className={`${styles.headerImg} d-flex align-items-center`}>
          <img src='assets/img/logoSmall.png' className={styles.topBarImg} alt='logo' />
          <div>共享器</div>
        </div>
        <nav className={styles.navigation}>
          <button>Articles</button>
          <button>Manual</button>
          <button>Contacts</button>
        </nav>
      </div>

      <div className={styles.openMenu}>
        <div className={`${styles.headerImgMob} d-flex align-items-center`}>
          <img src='assets/img/logoSmall.png' className={styles.topBarImgMobi} alt='logo' />
          <div><h2>共享器</h2></div>
        </div>
        <div onClick={openMenu} role='presentation' id='btn1'>
          <button className={classNames(styles.toggleBtn, { [styles.toggleBtnActive]: isMobile })}>
            <span />
          </button>
        </div>
      </div>
      <div id='sidebar' className={classNames(styles.sidebar, { [styles.active]: isMobile })}>
        <div className={styles.mainMenu}>
          <button>Articles</button>
          <button>Manual</button>
          <button>Contacts team</button>
          <div className={classNames(
            'd-flex justify-content-center align-items-center flex-column', styles.mainMenucontainer,
          )}
          >
            <div className={`${styles.headerInfoMobi}  d-flex flex-column`}>
              <div><span>Start your free trial today</span></div>
              <div>
                <p>
                  7-day Trial
                  <span className={styles.spanSemiTopBar}> • </span>
                  Easy Easy to use
                  <span className={styles.spanSemiTopBar}> • </span>
                  Cancel anytime
                </p>
              </div>
            </div>
            <div className={classNames(styles.headerInput, styles.form, 'd-inline-flex')}>
              <input
                type='text'
                name='email'
                value={email}
                onChange={handleEmailChange}
                disabled={isFormSent}
                className={classNames({ [styles.inputError]: isError })}
                placeholder='输入邮箱'
              />
              <button disabled={isFormSent} onClick={validate}>开始使用</button>
              <p className={classNames(styles.errorBlock, { [styles.errorMobile]: isError })}>
                You entered the email incorrectly
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`d-flex align-items-center justify-content-between flex-wrap ${styles.mobile}`}>
        <div className={`${styles.headerInfo}  d-flex flex-column`}>
          <div><span>Start your free trial today</span></div>
          <div>
            <p>
              7-day Trial
              <span className={styles.spanSemiTopBar}> • </span>
              Easy Easy to use
              <span className={styles.spanSemiTopBar}> • </span>
              Cancel anytime
            </p>
          </div>
        </div>
        <div className={classNames(styles.headerInput, styles.form, 'd-inline-flex')}>
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleEmailChange}
            disabled={isFormSent}
            className={classNames({ [styles.inputError]: isError })}
            placeholder='输入邮箱'
          />
          <button disabled={isFormSent} onClick={validate}>开始使用</button>
          <p className={classNames(styles.errorBlock, { [styles.error]: isError })}>
            You entered the email incorrectly
          </p>
        </div>
      </div>
    </header>
  );
};

TopBar.propTypes = {
  isError: PropTypes.bool.isRequired,
  isFormSent: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
};

export default TopBar;
