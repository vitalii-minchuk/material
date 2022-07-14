import { FC, Fragment, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { PostType } from "../../../types"

import { Button, CircularProgress, Container, Typography } from "@mui/material"


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
      <Container maxWidth="lg">
        <Button onClick={goBack}>go back</Button>
        <Typography variant="h5" sx={{py: 2}}>
          SinglePost: {post ? " #" + post.id : <CircularProgress size={18}/>}
        </Typography>
        <Link  to="edit">
          <Button variant="outlined" sx={{mb: 3}}>
            edit this post
          </Button>
        </Link>
        {post &&
          <Fragment>
            <Typography variant="subtitle1" sx={{mb: 2}}>{post.title}</Typography>
            <Typography variant="body2">{post.body}</Typography>
          </Fragment>
        }
      </Container>
    </Fragment>
  )
}

export { SinglePost }