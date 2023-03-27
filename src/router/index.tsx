import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazyLoading, RoutesElements, RoutesPaths } from '@/router/utils'
import React from 'react'
import App from '@/App'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Navigate to={RoutesPaths.catalog}/>
      },
      {
        path: RoutesPaths.catalog,
        element: lazyLoading(RoutesElements.catalog)
      },
      {
        path: RoutesPaths.catalogDetails,
        element: lazyLoading(RoutesElements.catalogDetails)
      },
      {
        path: RoutesPaths.feedback,
        element: lazyLoading(RoutesElements.feedback)
      },
      {
        path: RoutesPaths.catchAll,
        element: <Navigate to={RoutesPaths.catalog}/>
      }
    ]
  }
])
