import { FC, Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { PostType } from "../../types"

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

const Posts: FC = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()

      setPosts(data)
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <Typography variant="h3" component="h3">Posts:</Typography>
      <Link  to="/posts/new" replace>
        <Button variant="outlined">
          add new post
        </Button>
      </Link>
      <List>
        {posts?.map((post) => (
          <ListItem key={post.id}>
            <Link to={post.id + ""}>
                {post.title}
            </Link>
          </ListItem>
        ))}
      </List>

    </Fragment>

  )
}

export default Posts  