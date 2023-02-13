import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
function App() {


  return (
    <BrowserRouter>
          <div className="App">
             <Routes>
                  <Route exact path='/' element={< Home />}></Route>
             </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
