import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/assets/styles/general.scss'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient()
import '@/i18n'
import {I18nextProvider} from 'react-i18next'
import i18n from '@/i18n'
import Loader from '@/components/loader'
import {routes} from '@/router'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18n}>
      <Suspense>
        <RouterProvider router={routes} />
      </Suspense>
    </I18nextProvider>
  </QueryClientProvider>

)
