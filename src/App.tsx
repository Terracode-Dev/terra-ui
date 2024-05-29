import { useState } from "react"
import { Button } from "./components/base/ui/button"

function App() {
  const [data, setData] = useState(0);

  const handle = () => {
    setData(data + 1);
  }

  return (
    <div>
      <h1 className="text-red-400">{data}</h1>
      <Button onClick={handle}>increment</Button>
    </div>
  )
}

export default App
