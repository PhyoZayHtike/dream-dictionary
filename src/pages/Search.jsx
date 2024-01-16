import React from 'react'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import Loading from '../components/Loading'
import SearchDetail from '../components/SearchDetail'

function Search({ isLoading, error, datas }) {
  const {search} = useParams()
  return (
    <div>
      {error && <Error error={error}/>}
      {isLoading && <Loading/>}
      {!isLoading && !error && <SearchDetail datas={datas} search={search}/>}
    </div>
  )
}

export default Search