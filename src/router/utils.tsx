import React, {lazy, ReactNode} from 'react'

export enum RoutesPaths {
  catalog= '/catalog',
  catalogDetails= '/catalog/details/:id',
  feedback= '/feedback',
  catchAll = '*'
}

export enum RoutesElements {
  catalog= 'catalog',
  catalogDetails= 'catalogDetails',
  feedback= 'feedback',
}

export const lazyLoading = (componentName: string): ReactNode => {
  const Component = lazy(() => import(`../pages/${componentName}/index.tsx`))
  return <Component />
}
