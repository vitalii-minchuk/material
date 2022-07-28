import { FC, useEffect, useState } from "react"

import { Box } from "@mui/material"
import { BaseSkeleton } from "../../../components/mui/common/BaseSkeleton/BaseSkeleton"
import { MainTable } from "../../../components/mui/MainTable/MainTable"

const MachineLearning: FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Box p={2}>
      {loading ? (
        <BaseSkeleton variant="rectangular" height={371} />
      ) : (
        <MainTable />
      )}
    </Box>
  )
}

export { MachineLearning }