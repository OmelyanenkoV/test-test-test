import {Box, Button, Modal} from '@mui/material'
import React, {FC} from 'react'
import useModal from '@/store/modal'
import classNames from 'classnames'
import styles from '@/components/summaryModal/summaryModal.module.scss'
import CartProductItem from '@/components/cartProductItem'
import useCart from '@/store/cart'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {RoutesPaths} from '@/router/utils'

const summaryModal: FC = () => {
  const { open, closeModal} = useModal()
  const cart = useCart()
  const {t} = useTranslation()

  return (
    <Modal
      open={open}
      onClose={closeModal}
      className={classNames([styles.customModal])}
    >
        <Box className={classNames([styles.modalBox])}>
          {/* Dumb solution*/}
          { cart.cartItems.length === 0 && <p>{t('summaryModal.empty')}</p> }
          {
            cart.cartItems.length !== 0 &&
              cart.cartItems.map(item => <CartProductItem key={item.id} {...item} />)
          }
          {
            cart.cartItems.length !== 0 &&
              <Button variant="contained">{t('summaryModal.buy')}</Button>
          }
        </Box>
    </Modal>
  )
}

export default summaryModal
