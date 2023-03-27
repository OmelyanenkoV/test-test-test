import React, {FC} from 'react'
import classNames from 'classnames'
import {Box, Button, Container, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import styles from '@/pages/catalog/catalog.module.scss'
import ProductCard from '@/components/productCard'
import Api from '@/api'
import {useQuery} from '@tanstack/react-query'
import {CardData} from '@/components/productCard/types'
import {queryKeys} from '@/types/enums'
import Loader from '@/components/loader'
import usePagination from '@/store/pagination'
import {PaginationSize} from '@/types/store/pagination'
import SummaryModal from '@/components/summaryModal'


const getAllProducts = async (offset = 0) => {
  const { data } = await Api.getAllProducts(offset)
  return data
}
const Catalog: FC = () => {
  const {t} = useTranslation()
  const pagination = usePagination()

  const { isLoading, isError, data } = useQuery(
    [queryKeys.allProducts, pagination.page],
    () => getAllProducts(pagination.page),
    {keepPreviousData: true}
  )

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <div>Error fetching product data.</div>;
  }


  return (
    <Container maxWidth="md" className={classNames([styles.catalog])}>
      <Typography variant="h4" gutterBottom textAlign={'center'}>
        {t('catalog.topSales')}
      </Typography>

      <Box className={classNames([styles.catalogBox])}>
        { data.map((product: CardData) => <ProductCard cardData={product} showActions={true} key={product.id}/>) }
      </Box>

      <Box className={classNames([styles.pagination])}>
        <Button
          variant="outlined"
          disabled={pagination.page === 0}
          onClick={() => pagination.changePage(pagination.page = pagination.page - PaginationSize.size)}
        >
          {t('catalog.prev')}
        </Button>
        <Typography>{pagination.page/PaginationSize.size}</Typography>
        <Button
          variant="outlined"
          onClick={() => pagination.changePage(pagination.page = pagination.page + PaginationSize.size)}
        >
          {t('catalog.next')}
        </Button>
      </Box>

    </Container>

  )
}

export default Catalog
