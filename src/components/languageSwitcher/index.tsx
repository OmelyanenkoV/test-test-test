import React from 'react'
import { MenuItem, Box, FormControl, Select, SelectChangeEvent} from '@mui/material'
import {useTranslation} from 'react-i18next'
import useCommon from '@/store/common'
import {Languages} from '@/configuration'

const LanguageSwitcher = () => {
  const {t, i18n} = useTranslation()
  const common = useCommon()

  const handleChange = (event: SelectChangeEvent) => {
    common.setLang(event.target.value)
    i18n.changeLanguage(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size={'small'} >
        <Select
          value={common.lang}
          onChange={handleChange}
        >
          <MenuItem
            value={Languages.en}
            disabled={common.lang === Languages.en}
          >
            {t('languageSwitcher.english')}
          </MenuItem>
          <MenuItem
            value={Languages.ar}
            disabled={common.lang === Languages.ar}
          >
            {t('languageSwitcher.arabic')}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default LanguageSwitcher
