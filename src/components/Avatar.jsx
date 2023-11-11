import styles from './Avatar.module.css';

export const Avatar = ({ border = true, src }) => {
  return (
    <img
      className={border ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
    />
  );
};
