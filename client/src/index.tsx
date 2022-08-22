import * as React from 'react'
import { useEffect, useState } from "react";
import { render } from 'react-dom'

const App = () => {
  const [response, setResponse] = useState();
  useEffect(() => {
    fetch("http://localhost:9000/api")
        .then(res => res.text())
        .then(res => setResponse({ apiResponse: res }));
  }, [])

  return (
    <>{JSON.stringify(response)}</>
  )
}

render(<App />, document.getElementById('app'));
