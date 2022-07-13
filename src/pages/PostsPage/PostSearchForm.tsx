import { FC, FormEvent, useState } from "react"
import { URLSearchParamsInit } from "react-router-dom"

import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material"

interface IPostSearchForm {
  queryPost: string
  isLatest: string
  setSearchParams: (nextInit: URLSearchParamsInit, navigateOptions?: { replace?: boolean | undefined; state?: any; } | undefined) => void
}

const PostSearchForm: FC<IPostSearchForm> = ({setSearchParams, isLatest, queryPost}) => {
  const [search, setSearch] = useState(queryPost)
  const [latest, setLatest] = useState(isLatest ? true : false)

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()

    const { search, latest } = evt.target as typeof evt.target & {
      search: {value: string}
      latest: {checked: boolean}
    }

    const params = {post: "", latest: ""}

    if (search.value.length) params.post = search.value
    if (latest.checked) params.latest = "1"

    setSearchParams(params)
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="search" 
        label="Outlined"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            id="latest"
            value={latest}
            onChange={(e) => setLatest(e.target.checked)}
          />
        }
        label="New Only"
      />
      <Button variant="contained" type="submit">Search</Button>
    </Box>
  )
}

export { PostSearchForm }