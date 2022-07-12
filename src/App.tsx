import { FC, Fragment } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { Layout } from "./components/Layout"
import { RequireAuth } from "./hoc/RequireAuth"
import { About } from "./pages/About"
import { Contacts } from "./pages/Contacts"
import { Error } from "./pages/Error"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { EditPost } from "./pages/PostsPage/EditPost"
import { NewPost } from "./pages/PostsPage/NewPost"
import { Posts } from "./pages/PostsPage/Posts"
import { SinglePost } from "./pages/PostsPage/SinglePost"

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
          <Route path="posts/new" element={
            <RequireAuth>
              <NewPost />
            </RequireAuth>
          } />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
