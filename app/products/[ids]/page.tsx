'use client'
import React from 'react'
import { useParams } from 'next/navigation'

const ProductDetail = () => {
  const { ids } = useParams();
  return <div>{ids}</div>;
}

export default ProductDetail