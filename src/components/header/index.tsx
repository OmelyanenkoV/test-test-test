import React, {FC} from 'react'
import {AppBar, Badge, Box, Button, IconButton, Toolbar, Tooltip, Typography} from '@mui/material'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/languageSwitcher'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import styles from '@/components/header/header.module.scss'
import classNames from 'classnames'
import useCart from '@/store/cart'
import useModal from '@/store/modal'
import {RoutesPaths} from '@/router/utils'
import {useNavigate} from 'react-router-dom'



const Header: FC = () => {
  const { t } = useTranslation()
  const {getItemsCount} = useCart()
  const {openModal, closeModal} = useModal()
  const navigate = useNavigate()

  function goToFeedbackPage() {
    closeModal()
    navigate(RoutesPaths.feedback)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('header.welcome')}
          </Typography>
          {/*<Button variant="contained" onClick={goToFeedbackPage}>{t('summaryModal.feedback')}</Button>*/}
          <div className={classNames([styles.right])}>
              <IconButton onClick={goToFeedbackPage}>
                <MessageIcon />
              </IconButton>
            <IconButton aria-label="cart" onClick={openModal}>
              <Badge badgeContent={getItemsCount()} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <LanguageSwitcher/>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
