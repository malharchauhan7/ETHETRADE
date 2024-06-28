import { useState } from 'react'
import {Navbar,Welcome,Footer,Services,Transactions} from "./components";
import EthereumInfo from './components/EthereumInfo';

function App() {
  

  return (
    <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome/>
        </div>
        <EthereumInfo/>
        <Services/>
        
        <Transactions/>
        <Footer/>
    </div>
    
  )
}

export default App
