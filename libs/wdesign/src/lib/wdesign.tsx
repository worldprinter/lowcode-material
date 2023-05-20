import styles from './wdesign.module.css';

/* eslint-disable-next-line */
export interface WdesignProps {}

export function Wdesign(props: WdesignProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Wdesign!</h1>
    </div>
  );
}

export default Wdesign;
