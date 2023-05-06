import HorizontalScrolling from "./components/horizontalScrolling/HorizontalScrolling"
import Navbar from "./components/navbar/Navbar"
import Page1 from "./components/page-1/Page1"
import Page2 from "./components/page-2/Page2"
import Page3 from './components/page-3/Page3'
import Page4 from "./components/page-4/Page4"
import './App.css'
import Vegan from "./components/veganFriendly/Vegan"


export default function App(){
  return(
    <main>
      <Navbar/>
      <HorizontalScrolling/>
      <Vegan/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
    </main>
  )
}