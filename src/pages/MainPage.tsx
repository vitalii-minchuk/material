import { FC } from "react"
import { Link } from "react-router-dom"

const MainPage: FC = () => {
  return (
    <div>MainPage
      <Link to="/routing">routing</Link>
      <Link to="/redux">redux</Link>
    </div>
  )
}

export { MainPage }