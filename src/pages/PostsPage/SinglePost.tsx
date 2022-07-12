import { FC, Fragment, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { PostType } from "../../types"

import { Button, Typography } from "@mui/material"


const SinglePost: FC = () => {
  const [post, setPost] = useState<PostType | null>(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await response.json()

      setPost(data)
    }
    fetchData()
  }, [id])

  const goBack = (): void => navigate(-1)

  return (
    <Fragment>
      <Button onClick={goBack}>go back</Button>
      <Typography variant="h5" component="h3">
        SinglePost: {post ? " #" + post.id : "empty post"}
      </Typography>
      <Link  to={`/posts/${id}/edit`} replace>
        <Button variant="outlined">
          edit this post
        </Button>
      </Link>
      {post &&
        <Fragment>
          <Typography variant="subtitle1">{post.title}</Typography>
          <Typography variant="body2">{post.body}</Typography>
        </Fragment>
      }
    </Fragment>
  )
}

export { SinglePost }