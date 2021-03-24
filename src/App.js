import "./App.css"
import {useCallback, useEffect,} from "react"

const App = () => {
  useEffect(() => {
    console.log({navigator})
    console.log({window})
  }, [])

  const onAndroid = useCallback(
    () => {
      window.location.href = "googlechrome://navigate?url=www.reactjs.org"
      // window.open("googlechrome://navigate?url=www.reactjs.org", "_system", "location=yes")
    },
    [])

  const onIos = useCallback(
    () => {
      window.location.href = "googlechrome://reactjs.org"
      // window.open("googlechrome://reactjs.org")
    }, []
  )


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
        </p >
        <button
          className="App-link"
          onClick={onAndroid}
        >
          Android
        </button >
        <button
          className="App-link"
          onClick={onIos}
        >
          IOS
        </button >
        <a
          href="googlechrome://navigate?url=www.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Android</a >
        <a
          href="googlechrome://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >IOS</a >
      </header >
    </div >
  )
}

export default App
