import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {LOGIN_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent={"flex-end"}>
                    {
                        user ?
                            <Button onClick={() => auth.signOut()} variant={"outlined"} color={"warning"}>Exit</Button>
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