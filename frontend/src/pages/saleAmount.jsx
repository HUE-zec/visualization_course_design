import React, { useEffect } from 'react'
import { getStuListApi } from '../api'

export default function SaleAmount () {

  useEffect(() => {
    getStuListApi().then(({ data }) => console.log(data))
  }, [])

  return (
    <div>SaleAmount
    </div>
  )
}
