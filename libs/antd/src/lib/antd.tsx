import styles from './antd.module.css';

/* eslint-disable-next-line */
export interface AntdProps {}

export function Antd(props: AntdProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Antd!</h1>
    </div>
  );
}

export default Antd;
