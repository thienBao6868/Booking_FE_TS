import { Box } from '@mui/material'
import React from 'react'
import "./appbar.css";
function BannerWapper() {
  return (
    <Box sx={{
        display: { xs: "none",sm:"flex", md: "flex" },
      }}>
      <div className="wrapper">
        <div className="wrapper_1">
          <div className="wrapper-title">
            <header>
              <h1>Find your next stay</h1>
            </header>
            <h4>Search low prices on hotels, homes and much more...</h4>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default BannerWapper
