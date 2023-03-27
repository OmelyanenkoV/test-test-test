import React, {FC} from 'react'
import styles from '@/components/loader/loader.module.scss'

const Loader: FC = () => {
  return (
  <div className={styles.ldsRipple}>
    <div></div>
    <div></div>
  </div>
  )
}

export default Loader
