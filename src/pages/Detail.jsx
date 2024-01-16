import React from 'react'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/CardDetail'
import Loading from '../components/Loading'
import Error from '../components/Error'

function Detail({isLoading, error, datas}) {
  const {id} = useParams()
  return (
    <div>
      {error && <Error error={error}/>}
      {isLoading && <Loading/>}
      {!isLoading && !error && <CardDetail id={id} datas={datas}/>}
    </div>
  )
}

export default Detail