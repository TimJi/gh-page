import "./App.css"
import {useEffect, } from "react"

const App = () => {
  useEffect(() => {
    console.log({navigator})
    console.log({window})
  }, [])

  return (
    <div className="App" >
      <header className="App-header" >
        <p >
          {`platform: ${navigator.platform}`}
        </p >
        <p >
          {`userAgent: ${navigator.userAgent}`}
        </p >
        <p >
          {`vendor: ${navigator.vendor}`}
        </p >
        <p >
          {`opera: ${window.opera}`}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a >
      </header >
    </div >
  )
}

export default App
