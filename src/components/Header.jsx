import styles from './Header.module.css';

import igniteLogoImg from '../assets/ignite-logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={igniteLogoImg}
        alt=""
      />
    </header>
  );
};
