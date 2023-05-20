import styles from './mui.module.css';

/* eslint-disable-next-line */
export interface MuiProps {}

export function Mui(props: MuiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mui!</h1>
    </div>
  );
}

export default Mui;
