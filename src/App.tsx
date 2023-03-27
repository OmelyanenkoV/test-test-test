import React, { useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import Header from '@/components/header'
import useCommon from '@/store/common'
import SummaryModal from '@/components/summaryModal'


function App() {
  const common = useCommon()
  const dir = common.lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
  }, [dir]);


  return (
   <div>
     <SummaryModal/>
     <Header/>
     <Outlet/>
   </div>
  )
}

export default App
