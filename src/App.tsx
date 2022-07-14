import { FC, Fragment } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { Layout } from "./components/routing/Layout"
import { RequireAuth } from "./hoc/routing/RequireAuth"
import { Contacts } from "./pages/routing/Contacts"
import { Error } from "./pages/routing/Error"
import { Home } from "./pages/routing/Home"
import { EditPost } from "./pages/routing/PostsPage/EditPost"
import { NewPost } from "./pages/routing/PostsPage/NewPost"
import { Posts } from "./pages/routing/PostsPage/Posts"
import { SinglePost } from "./pages/routing/PostsPage/SinglePost"
import { MainPage } from "./pages/MainPage"
import { About } from "./pages/routing/About"
import { Login } from "./pages/routing/Login"

const App: FC = () =>  {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="routing/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts/*" element={<Contacts />} />
          <Route path="posts" element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }>
          </Route>
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="posts/new" element={<NewPost />} />
          <Route path="about" element={<About />} />
          <Route path="about-us" element={<Navigate to="/routing/about" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
