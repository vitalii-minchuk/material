import { FC, Fragment } from "react"
import AddPostForm from "../../components/rdx/Home/AddPostForm"
import Posts from "../../components/rdx/Home/Posts"

const Rdx: FC = () => {
  return (
    <Fragment>
        <AddPostForm />
        <Posts />
    </Fragment>
  )
}

export { Rdx }