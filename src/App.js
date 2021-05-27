// import React, { useState, useEffect } from "react";

import './App.css';
// import DataSource from "./data/data.json";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import FirstCol from "./components/FirstCol/FirstCol";
import SecondCol from "./components/SecondCol/SecondCol";
import ThirdCol from "./components/ThirdCol/ThirdCol";
import Footer from "./components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
    firstCol: {
        padding: 1,
    },
    secondCol: {

    },
    thirdCol: {

    },
    footer: {
        margin: "0 auto"
    }
}));

function App() {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item md={3} xs={12} className={classes.firstCol}>
                            <FirstCol />
                        </Grid>
                        
                        <Grid item md={6} xs={12} className={classes.secondCol}>
                            <SecondCol />
                        </Grid>

                        <Grid item md={3} xs={12} className={classes.thirdCol}>
                            <ThirdCol />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container xs={12} className={classes.footer}>
                        <Footer />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;