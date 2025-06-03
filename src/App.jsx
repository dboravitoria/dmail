import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Sidebar from './components/Sidebar/Sidebar'
import Bottombar from './components/BottomBar/Bottombar'
import EmailList from './components/EmailList/EmailList'
import EmailContent from './components/EmailContent/EmailContent'
import { useState } from 'react'

function App() {
  const [openEmail, setOpenEmail] = useState(null)
  return (
    <>
      <Header />
      <Container>
        <div className='md:flex md:flex-row gap-4 xl:gap-6 h-full relative'>
          <Sidebar />
          <EmailList setOpenEmail={setOpenEmail}/>
          <EmailContent setOpenEmail={setOpenEmail} email={openEmail}/>
          <div className='flex justify-end items-end'><Bottombar/></div>
        </div>
      </Container>
      
      
    </>
  )
}

export default App
