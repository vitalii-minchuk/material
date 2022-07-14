import {  FC, Fragment, useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

import { PostType } from "../../../types"

import { Button, Container, LinearProgress, List, ListItem, Typography } from "@mui/material"
import { PostSearchForm } from "./PostSearchForm"

const Posts: FC = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const queryPost = searchParams.get("post") || ""
  const isLatest = searchParams.get("latest") || ""

  const filteredPosts = posts?.filter(post => (
    post.title.includes(queryPost) && post.id >= (isLatest ? 81 : 1))
  )

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
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{py: 2}}>
          Posts: {filteredPosts?.length ? filteredPosts.length : 0}
        </Typography>
        <Link  to="new">
          <Button variant="outlined">
            add new post
          </Button>
        </Link>
        <PostSearchForm
          setSearchParams={setSearchParams} 
          isLatest={isLatest} 
          queryPost={queryPost}
        />
        <List>
          {!filteredPosts?.length ? (
            <LinearProgress />
          ) : (
            filteredPosts.map((post) => (
              <ListItem key={post.id}>
                <Link to={"" + post.id}>
                    {post.title}
                </Link>
              </ListItem>
            ))
          )}
        </List>
      </Container>
    </Fragment>
  )
}

export { Posts }