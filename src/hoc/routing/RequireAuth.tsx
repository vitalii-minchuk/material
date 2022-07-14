import { FC, ReactElement, useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"

import { AuthContext } from "./AuthProvider"

interface IRequireAuth {
  children: ReactElement | null 
}

const RequireAuth: FC<IRequireAuth> = ({ children }): ReactElement | null => {
  const location = useLocation()
  const { isAuth } = useContext(AuthContext)

  if (!isAuth) {
    return <Navigate to="/routing/login" state={{from: location}} />
  }

  return children
}

export { RequireAuth }