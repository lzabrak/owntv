import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import TV1000 from './TV1000'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
			    <Routes>
				    <Route path='/' element={<Home/>}></Route> 
            <Route path='/tv1000' element={<TV1000/>}></Route> 
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
