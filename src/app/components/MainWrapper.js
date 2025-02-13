import React from 'react'
import Footer from './Footer'
import Header from './Header'

function MainWrapper({ className, children, style='', ...props}) {
  return (
    <>
    <div className={`min-h-[100vh]  ${className}`} style={style} {...props}>
        <Header />
        {children}
        <Footer />
    </div>
    </>
  )
}

export default MainWrapper