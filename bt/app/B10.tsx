import React from 'react'
import BaseCart from './BaseCart';
import BaseButton from './BaseButton';
export default function B10() {
  return (
    <div>
        <b>B10</b>
        <BaseCart
      content="Áo phông nam mát mẻ"
      title="Áo phông nam"
      image="https://xcimg.szwego.com/20211020/i1634708009_3652_0.jpg"
      type='primary'
    >
      <BaseButton type="primary">Thêm vào giỏ hàng</BaseButton>
    </BaseCart>

    </div>
  )
}

