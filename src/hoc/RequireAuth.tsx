import { FC, ReactElement } from "react"
import { Navigate } from "react-router-dom"

interface IRequireAuth {
  children: ReactElement | null 
}

const RequireAuth: FC<IRequireAuth> = ({ children }): ReactElement | null => {
  const auth = true

  if (!auth) {
    return <Navigate to="/login" />
  }

  return children
}

export { RequireAuth }