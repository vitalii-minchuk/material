import { FC, Fragment, useEffect, useState } from "react"

import { DataGrid, GridColDef } from "@mui/x-data-grid"

type UserDataType = {
  id: number
  name: string
  username: string
  email: string
}

const MainTable: FC = () => {
  const [users, setUsers] = useState<UserDataType[] | null>(null)
  const [pageSize, setPageSize] = useState(2)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    }
    fetchData()
  }, [])

  const columns: GridColDef[] = [
    {field: "id", headerName: "User ID", width: 70},
    {field: "name", headerName: "Full Name", width: 150},
    {field: "username", headerName: "Nickname", width: 150},
    {field: "email", headerName: "Email", width: 150},
  ]

  const rows = [] as UserDataType[]

  users?.map(el => (
      rows.push({
        id: el.id,
        name: el.name,
        username: el.username,
        email: el.email
      })
    )
  )

  return (
    <Fragment>
      <DataGrid 
        columns={columns}
        rows={rows}
        sx={{height: 371}}
        loading={!users?.length}
        checkboxSelection
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pagination
        rowsPerPageOptions={[2, 3, 5]}
      />
    </Fragment>
  )
}

export { MainTable }