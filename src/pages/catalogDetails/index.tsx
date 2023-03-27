import React, {FC} from 'react'
import {Button, Container} from '@mui/material'
import {useNavigate, useParams} from 'react-router-dom'
import Api from '@/api'
import {useQuery} from '@tanstack/react-query'
import ProductCard from '@/components/productCard'
import Loader from '@/components/loader'
import {queryKeys} from '@/types/enums'
import {useTranslation} from 'react-i18next'
import {RoutesPaths} from '@/router/utils'

const getSingleProduct = async (id: string) => {
  const { data } = await Api.getSingleProduct(id)
  return data
}

const CatalogDetails: FC = () => {
  const navigate = useNavigate()
  const {t} = useTranslation()

  const params = useParams()
  const { isLoading, isError, data } = useQuery(
    [queryKeys.singleProduct],
    () => getSingleProduct(params.id as string),
    {keepPreviousData: true}
  )

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <div>Error fetching product data.</div>;
  }

  return (
    <Container maxWidth="md" style={{paddingTop: '20px'}}>
      <Button onClick={() => navigate(RoutesPaths.catalog)}>{t('common.backToCatalog')}</Button>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <ProductCard cardData={data} showActions={false}/>
      </div>
    </Container>
  )
}

export default CatalogDetails
