import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Wrapper from './components/wrapper'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const loading = useSelector(state => state.loading)

  return (
    <>
      <div className='app'>
        {loading && (
          <div className="loader">
            <img 
              src="/speedometer-loader.gif" 
              alt="Loading..." 
              className="loader-image"
            />
          </div>
        )}
        <Wrapper />
      </div>
    </>
  )
}

export default App