import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";

import GitHubIcon from '@material-ui/icons/GitHub';

import Github from "../../assets/github.png";
import Kaggle from "../../assets/kaggle.png";
import Codeforces from "../../assets/codeforces.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "0 auto",
        padding: "20px 0",
    },
    linkIcon: {
        width: "5em",
    },
    linkComp: {
        margin: "0 auto",
    }
}));

export default function ThirdCol(props) {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.root} elevation={2}>
                <Grid container>
                    <Grid item xs={11} style={{ margin: "10px auto", width: "100%" }}>
                        <Typography variant="h6" component="h6">
                            Một chút về tôi
                        </Typography>
                        <Typography variant="p" component="p">
                            Tôi có ước mơ là một ngày nào đó sẽ trở thành một nhà khoa học dữ liệu. Đem dữ liệu đến thông tin cho tất cả mọi người.
                        </Typography>
                    </Grid>

                    <Grid container spacing={1} alignContent="center">
                        
                        <Grid item xs={4} alignContent="center">
                            <Button href="https://github.com/tuanio" target="_blank">
                                <img src={Github} className={classes.linkIcon} />
                            </Button>
                        </Grid>
                        
                        <Grid item xs={4} alignContent="center">
                            <Button href="https://www.kaggle.com/tuannguyenvananh" target="_blank">
                                <img src={Kaggle} className={classes.linkIcon} />
                            </Button>
                        </Grid>

                        <Grid item xs={4} alignContent="center">
                            <Button href="https://codeforces.com/profile/tuanio" target="_blank">
                                <img src={Codeforces} className={classes.linkIcon} />
                            </Button>
                        </Grid>
                        
                    </Grid>

                </Grid>
            </Paper>
        </>
    )
}