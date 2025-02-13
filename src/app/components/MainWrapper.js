import React from 'react'
import Footer from './Footer'
import Header from './Header'

function MainWrapper({ className, children, style='', ...props}) {
  return (
    <>
    <div className={`flex flex-wrap flex-col min-h-[100vh]  ${className || ''}`} style={style||''} {...props}>
        <Header />
        <main className='flex-1 pt-10 pb-16 min-h-[400px]'>{children}</main>
        <Footer />
    </div>
    </>
  )
}

export default MainWrapper