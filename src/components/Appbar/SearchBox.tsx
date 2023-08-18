import React from "react";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import "./searchBox.css";
import { Button, Popper } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
function SearchBox() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className="main-wapper">
      <div className="box-input-place">
        <div className="wapper-icon">
          <SingleBedIcon color="inherit" fontSize="large" />
        </div>
        <input placeholder="where are you going?" className="input-place" />
      </div>
      <div className="box-input-place">
        <button
          className="button-calender"
          aria-describedby={id}
          type="button"
          onClick={handleClick}
        >
          <CalendarMonthIcon />
          <span style={{ fontSize: "0.8rem", textTransform: "lowercase" }}>
            check-in date -- check-out date
          </span>
        </button>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="bottom-start"
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangeCalendar"]}>
              <DateRangeCalendar disablePast={true} />
            </DemoContainer>
          </LocalizationProvider>
        </Popper>
      </div>
      <div className="box-input-place">
        <div className="wapper-icon">
          <SingleBedIcon color="inherit" fontSize="large" />
        </div>
        <input placeholder="where are you going?" className="input-place" />
      </div>
      <Button variant="contained">search</Button>
    </div>
  );
}

export default SearchBox;
