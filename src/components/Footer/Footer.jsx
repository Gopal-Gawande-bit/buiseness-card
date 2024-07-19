import React from "react"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Box, IconButton, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Box sx={{ py: 3, px: 2, mt: "auto" }}>
      <Typography>Follow Us </Typography>
      <Box>
        <IconButton
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
