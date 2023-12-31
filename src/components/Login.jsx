import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";
import firebase from "firebase/compat/app";

const Login = () => {
    const {auth} = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
    }
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width:400, background:'darkgray'}}
                container alignItems={'center'} direction={'column'}>
                    <Box p={5} onClick={login}>
                        <Button variant={"outlined"}>Sign in with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;