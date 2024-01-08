import React, { useEffect, useState } from 'react'
import { getPhoneTopListApi } from '../../api'
import PhoneSalesChart from '../../components/saleChart'

export default function Phone () {
  const [data, setData] = useState([])
  useEffect(() => {
    getPhoneTopListApi().then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <PhoneSalesChart data={data} />
    </div>
  )
}
