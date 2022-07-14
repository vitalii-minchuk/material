import { FC } from "react"
import { Link, Route, Routes } from "react-router-dom"

import { Container, List, ListItem, Typography } from "@mui/material"

const Contacts: FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{py: 2}}>Contacts</Typography>
      <List>
        <ListItem>
          <Link to="team">Our team</Link>
        </ListItem>
        <ListItem>
          <Link to="contact">Our contacts</Link>
        </ListItem>
      </List>
      <Routes>
        <Route path="team" element={<p><strong>our team: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis perferendis quos commodi unde.</p>} />
        <Route path="contact" element={<p><strong>our contacts: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis perferendis quos commodi unde.</p>} />
      </Routes>
    </Container>
  )
}

export { Contacts }