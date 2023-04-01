import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Box>
 <AppBar>
<Toolbar>
        <Typography>News</Typography>
        <Button color="inherit">VIEW</Button>
        <Button color="inherit">ADD</Button>
</Toolbar>
</AppBar>
</Box>
    </div>
  )
}

export default Navbar
