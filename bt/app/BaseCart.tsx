import React from 'react';
import styles from './BaseButton10.module.css';

interface BaseCartProps {
  type: 'primary';
  content: string;
  title: string;
  image: string;
  children: React.ReactNode;
}

export default function BaseCart({ type, content, title, image, children }: BaseCartProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <button className={`${styles.button} ${styles[type]}`}>
        {children}
      </button>
    </div>
  );
}
