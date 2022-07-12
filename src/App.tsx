import { FC, Fragment } from "react"
import { Route, Routes } from "react-router-dom"


import Contact from "./pages/Contact"
import Error from "./pages/Error"
import About from "./pages/About"
import Layout from "./components/Layout"
import Home from "./pages/Home"


const App: FC = () =>  {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
