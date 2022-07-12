import { FC, Fragment } from "react"
import { Route, Routes } from "react-router-dom"

import About from "./pages/About"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Error from "./pages/Error"
import Posts from "./pages/PostsPage/Posts"
import SinglePost from "./pages/PostsPage/SinglePost"
import EditPost from "./pages/PostsPage/EditPost"
import NewPost from "./pages/PostsPage/NewPost"

const App: FC = () =>  {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="posts/new" element={<NewPost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
