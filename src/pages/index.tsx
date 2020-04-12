import React from 'react';
import styles from './index.less';
import { setLocale, getLocale } from 'umi';

export default () => {
  function handleClick() {
    const locale = getLocale();
    if (locale === 'en-US') {
      setLocale('zh-CN', false);
    }
    if (locale === 'zh-CN') {
      setLocale('en-US', false);
    }
  }
  return (
    <div>
      <h1 className={styles.title} onClick={handleClick}>
        Page index
      </h1>
    </div>
  );
};
