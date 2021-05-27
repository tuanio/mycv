// import React, { useState, useEffect } from "react";

// import Grid from "@material-ui/core/Grid";
// import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: 50
    },
    text: {
        textAlign: 'center',
        padding: '0.5em 0 0 0'
    }
}));

export default function Footer(props) {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.root} elevation={2}>
                <Typography variant="p" component="p" className={classes.text}>
                    Made by Tuan with ♥ and greate enthusiasm
                </Typography>
            </Paper>
        </>
    )
}