import React from "react"
import corporate from "../../assets/corporagegirl.webp"
import { Button } from "@mui/material"

export const Header = () => {
  return (
    <div>
      <img src={corporate} alt="" />
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <h3>laurasmith.website</h3>
      <div>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: "10px" }}
        >
          Email
        </Button>
        <Button variant="contained" color="primary">
          LinkedIn
        </Button>
      </div>
    </div>
  )
}
