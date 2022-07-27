import { ChangeEvent, FC } from "react"

import { Input, Stack } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

interface ISearchBar {
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const SearchBar: FC<ISearchBar> = ({ placeholder, onChange }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <SearchIcon /> 
      <Input placeholder={placeholder} onChange={onChange} />
    </Stack>
  )
}

export { SearchBar }