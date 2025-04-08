import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'


const bottlesPromise = fetch('../public/bottles.json')
                       .then(response=>response.json())

function App() {
  
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Bottles Loading</h3>}>
              <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
