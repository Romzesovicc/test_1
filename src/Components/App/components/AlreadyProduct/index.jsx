import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import FormEmail from '../../common/FormEmail';

const AlreadyProduct = () => (
  <div className={classNames(styles.alreadyBlock, 'd-flex mx-auto align-items-center')}>
    <div className='d-flex mx-auto justify-content-center flex-column'>
      <FormEmail />
      <div className={classNames('d-flex mx-auto', styles.alreadyInput)}>
        <p>Already a ProductName user?</p>
        <button>Sign In →</button>
      </div>
    </div>
  </div>
);

export default AlreadyProduct;
