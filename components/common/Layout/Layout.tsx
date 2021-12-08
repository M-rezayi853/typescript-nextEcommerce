import { FC } from 'react'

import { Footer, Navbar } from '@components/common'
import { Sidebar } from '@components/ui'
import { CartSidebar } from '@components/Cart'
import { useUI } from '@components/ui/context'
import { ApiProvider } from '@framework'
import s from './Layout.module.css'

const Layout: FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI()

  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className='fit'>{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  )
}

export default Layout
