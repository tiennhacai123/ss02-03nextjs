import React from 'react'
import BaseAlert from './BaseAlert'
export default function B9() {
  return (
    <div>
      <b>B9</b>
        <BaseAlert type='success'>Success Text</BaseAlert>
        <BaseAlert type='info'>Text Text</BaseAlert>
        <BaseAlert type='warning'>Warning Text</BaseAlert>
        <BaseAlert type='error'>Error Text</BaseAlert>
    </div>
  )
}
