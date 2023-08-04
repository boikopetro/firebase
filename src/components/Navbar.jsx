import React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {LOGIN_ROUTE, user} from "../utils/consts";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent={"flex-end"}>
                    {
                        user ?
                            <Button variant={"outlined"} color={"warning"}>Exit</Button>
                        :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant={"outlined"} color={"warning"}>Login</Button>
                            </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;