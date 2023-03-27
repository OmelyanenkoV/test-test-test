import React, {FC} from 'react'
import {Button, Card, CardActions, CardContent, CardMedia} from '@mui/material'
import {CardData} from '@/components/productCard/types'
import classNames from 'classnames'
import styles from '@/components/cartProductItem/cartProductItem.module.scss'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useCart from '@/store/cart'


const CartProductItem: FC<CardData> = (props) => {
  const cart = useCart()
  return (
    <Card sx={{ minWidth: 345 }} className={classNames([styles.productItemCard])}>
      <CardMedia
        component="img"
        className={classNames([styles.productItemCardImg])}
        sx={{ height: 70, width: 70 }}
        image={props.images[0]}
        title={props.title}
      />
      <CardContent>
        {props.title}
      </CardContent>
      <CardContent>
        {props.price}$
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => cart.removeItemFromCart(props.id)}>
          <DeleteForeverIcon/>
        </Button>
      </CardActions>
    </Card>
  )
}

export default CartProductItem
