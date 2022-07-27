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
import { Rdx } from "./pages/rdx/Rdx"
import { LayoutRdx } from "./components/rdx/LayoutRdx"
import { Transaction } from "./pages/rdx/Transaction"
import { AboutRdx } from "./pages/rdx/AboutRdx"
import { FormikHome } from "./pages/formik/FormikHome"
import { BankAccount } from "./pages/formik/BankAccount"
import { LayoutFormik } from "./components/formik/LayoutFormik"
import { Donation } from "./pages/formik/Donation"
import { Millionaire } from "./pages/formik/Millionaire"
import { MUIHome } from "./pages/mui/MUIHome"
import { LayoutMUI } from "./components/mui/LayoutMUI"
import { Functions } from "./pages/mui/Functions/Functions"


const App: FC = () =>  {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="mui/*" element={<LayoutMUI />}>
          <Route index element={<MUIHome />} />
          {/* <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="hosting" element={<Hosting />} /> */}
          <Route path="functions" element={<Functions />} />
          {/* <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} /> */}
        </Route>

        <Route path="redux/*" element={<LayoutRdx />}>
          <Route index element={<Rdx />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="about" element={<AboutRdx />} />
        </Route>

        <Route path="formik/*" element={<LayoutFormik />}>
          <Route index element={<FormikHome />} />
          <Route path="bank" element={<BankAccount />} />
          <Route path="donation" element={<Donation />} />
          <Route path="millionaire" element={<Millionaire />} />
        </Route>

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
