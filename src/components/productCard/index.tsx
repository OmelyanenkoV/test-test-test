import React, {FC} from 'react'
import {Card, Button, CardActions, CardContent, CardMedia, Typography, Tooltip} from '@mui/material'
import {CardPropsTypes} from '@/components/productCard/types'
import {useTranslation} from 'react-i18next'
import styles from '@/components/productCard/productCard.module.scss'
import classNames from 'classnames'
import {useNavigate} from 'react-router-dom'
import useCart from '@/store/cart'

const ProductCard: FC<CardPropsTypes> = (props) => {
  const { cardData, showActions = true } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const cart = useCart()

  return (
    <Card sx={{ maxWidth: 345 }} className={classNames([styles.card])}>
      <CardMedia
        component="img"
        className={classNames([styles.cardImage])}
        sx={{ height: 160 }}
        image={cardData.images[0]}
        title={cardData.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={classNames([styles.cardTitle])}
        >
          <Tooltip title={cardData.title} placement="top-start">
            <span>{cardData.title}</span>
          </Tooltip>
        </Typography>
        <Typography variant="body2" gutterBottom color="text.secondary">
          <span>{t('productCard.category', { category: cardData.category.name })}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span>{t('productCard.price', { price: cardData.price })}</span>
        </Typography>
        {!showActions && // dumb decision
            <Typography variant="body2" color="text.secondary">
                <span>{t('productCard.desc') } {cardData.description}</span>
            </Typography>
        }
      </CardContent>
      { showActions &&
          <CardActions style={{display: 'flex', justifyContent: 'center'}}>
              <Button
                  size="small"
                  variant="contained"
                  onClick={() => cart.addItemToCard(cardData)}
                  disabled={cart.itemAlreadyAdded(cardData.id)}
              >
                {t('productCard.addToCart')}
              </Button>
              <Button
                  size="small"
                  variant="contained"
                  onClick={() => navigate(`/catalog/details/${cardData.id}`)}
              >
                {t('productCard.details')}
              </Button>
          </CardActions>
      }
    </Card>
  )
}

export default ProductCard
