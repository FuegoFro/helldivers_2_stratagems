import { Stratagem } from './stratagems'
import styles from './StratagemPane.module.css'

export interface StratagemPaneProps {
  stratagem: Stratagem
  depth: number
  enabled: boolean
  activated: boolean
}

export default function StratagemPane({
  stratagem,
  depth,
  enabled,
  activated,
}: StratagemPaneProps) {
  const containerStyle = activated
    ? styles.activated
    : enabled
      ? styles.enabled
      : styles.disabled
  return (
    <div className={containerStyle}>
      <p className={styles.consumed}>
        <span className={styles.name}>{stratagem.name}</span> -{' '}
        <span className={styles.consumed}>
          {stratagem.code.substring(0, depth)}
        </span>
        <span className={styles.unconsumed}>
          {stratagem.code.substring(depth)}
        </span>
      </p>
    </div>
  )
}
