import styles from './minimal.module.scss';
const { version, name } = require('../../../package.json');

/* eslint-disable-next-line */
export interface MinimalProps {
  scopeStyle?: any;
  id?: string;
}

export function Minimal(props: MinimalProps) {
  const { scopeStyle, id } = props;
  const scopeClass = scopeStyle ? scopeStyle['container'] : styles['container'];
  return (
    // <div className={styles['container']}></div>
    <div id={id} className={scopeClass}>
      <h1>
        <span> Hello there, </span>
        Welcome to Minimal! 👋
      </h1>
      {name}:{version}
    </div>
  );
}

export default Minimal;
