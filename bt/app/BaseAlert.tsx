import React from 'react'
import styles from './BaseAlert.module.css'
interface BaseAlertProps {
    type: 'success' | 'info' | 'warning' | 'error' ;
    children: React.ReactNode;
}
export default function BaseAlert({type, children}: BaseAlertProps) {
  return (
    <div>
        <p className={`${styles.p} ${styles[type]}`}>
            {children}
        </p>
    </div>
  )
}
