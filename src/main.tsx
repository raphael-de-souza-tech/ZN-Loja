import { createRoot } from 'react-dom/client'
import './index.css'
import {Navbar} from './components/Navbar'
import { Banner } from './components/Banner/Banner'


createRoot(document.getElementById('root')!).render(
  <>
    <Navbar />
    <Banner />
  </>,
  
)
