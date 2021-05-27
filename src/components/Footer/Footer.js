// import React, { useState, useEffect } from "react";

// import Grid from "@material-ui/core/Grid";
// import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: 50
    }
}));

export default function Footer(props) {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.root} elevation={2}>
                
            </Paper>
        </>
    )
}