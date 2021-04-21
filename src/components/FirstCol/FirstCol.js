import React, { useState, useEffect } from "react";

import Me from "../../assets/me.jpg";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px 0"
    },
    avatarName: {
        textAlign: "center"
    },
    avatarLabel: {
        color: "gray",
        textAlign: "center"
    },
    avatar: {
        width: "8em",
        height: "100%",
        margin: "0 auto",
    }
}));

export default function FirstCol(props) {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={2} direction="column">
                
                <Grid item xs={12}>
                    <Paper elevation={2} className={classes.root}>
                        <Avatar alt="Tuan" src={Me} className={classes.avatar} />
                        <Typography variant="h6" component="h6" className={classes.avatarName}>
                            Nguyễn Văn Anh Tuấn
                        </Typography>
                        <Typography variant="p" component="p" className={classes.avatarLabel}>
                            Sinh Viên
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={2}>
                        <Typography variant="h6" component="h6">
                            Học vấn
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}