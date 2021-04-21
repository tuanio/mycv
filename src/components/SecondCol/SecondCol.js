import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
    }
}));

export default function SecondCol(props) {
    const classes = useStyles();

    return (
        <>
            <Paper elevation={2} className={classes.root}>
            </Paper>
        </>
    )
}