import { useState, FC, createContext, ReactNode } from "react"

interface IAuthContext {
  isAuth: boolean
  logIn: () => void
  logOut: () => void
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  logIn: () => {},
  logOut: () => {}
})

interface IAuthProvider {
  children: ReactNode
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  const [isAuth, setAuth] = useState(false)

  const logIn= () => {
    setAuth(true)
  }

  const logOut = () => {
    setAuth(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }