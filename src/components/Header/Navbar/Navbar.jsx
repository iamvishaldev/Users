import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './NavStyle';

/**
 * 
 * Navbar Component
 */

const Navbar = () => {
    const classes = useStyles()
  return (
    <div className={classes.navbarWrapper}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Box>
            <PersonIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
