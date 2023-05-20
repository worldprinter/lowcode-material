import styles from './tdesign.module.css';

/* eslint-disable-next-line */
export interface TdesignProps {}

export function Tdesign(props: TdesignProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Tdesign!</h1>
    </div>
  );
}

export default Tdesign;
