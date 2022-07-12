import { FC, ReactNode } from "react"
import { Link, useMatch } from "react-router-dom"

interface ICustomNavLink {
  to: string
  children: ReactNode
}
const CustomNavLink: FC<ICustomNavLink> = ({ children, to, ...props }) => {
  const match = useMatch(to)

  return (
    <Link to={to} {...props} style={{color: match ? "red" : ""}}>
      {children}
    </Link>
  )
}

export { CustomNavLink }