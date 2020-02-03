import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const Footer = () => (
  <footer className={classNames('d-flex flex-column justify-content-center align-items-center mx-auto', styles.footer)}>
    <div>
      <p>价格</p>
      <p>联系我们</p>
      <p>下载</p>
      <p>合作伙伴</p>
    </div>
    <div>
      <p>© 2014–2018 共享器</p>
      <p>隐私政策</p>
      <p>手册</p>
      <p>服务条款</p>
      <p>卸载</p>
    </div>
  </footer>
);

export default Footer;
