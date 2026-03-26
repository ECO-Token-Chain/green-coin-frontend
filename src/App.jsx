import { RouterProvider } from "react-router-dom"
import "./global/styles/global.style.scss"
import { router } from "./App.routes"
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
