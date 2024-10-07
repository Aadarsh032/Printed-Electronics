import Home from  './Components/Home/Home'
import Navbar from './Navbar/Navbar'
import PublishedPapers from './Components/Published Papers/PublishedPapers'
import OurTeam from './Components/Our Team/OurTeam'
import About from './Components/About/About'
import ContactUs from './Components/ContactUs/ContactUs'
import ResearchFacility from './Components/Research Facility/ResearchFacility'
import NewsUpdates from './Components/News&Updates/NewsUpdates'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Collaborators from './Components/Collaborators/Collaborators'



function App() {
  return (
    
    <BrowserRouter>
 
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
      <Route path='/ResearchFacility' element={<ResearchFacility/>}></Route>
      <Route path='/OurTeam' element={<OurTeam/>}></Route>
      <Route path='/PublishedPapers' element={<PublishedPapers/>}></Route>
      <Route path='/NewsUpdates' element={<NewsUpdates/>}></Route>
      <Route path='*' element={<ContactUs/>}></Route>
      <Route path='/Collaborators' element={<Collaborators/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

    
  
    
  )
}

export default App
