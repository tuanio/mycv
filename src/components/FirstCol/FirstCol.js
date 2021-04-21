import React, { useState, useEffect } from "react";

import Me from "../../assets/me.jpg";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';

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
    },
    info: {
        boxSizing: "border-box",
        padding: "0.4em",
    },
    iconInfo: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
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
                    <Paper elevation={2} className={classes.info}>
                        <Typography variant="h6" component="h6">
                            Liên hệ
                        </Typography>
                        <Typography className={classes.info}>
                            <Typography className={classes.iconInfo}>
                                <Button href="mailto:nvatuan3@gmail.com" className={classes.iconInfo} color="secondary">
                                    <MailIcon />
                                </Button>
                                <span style={{ marginLeft: "0.5em" }} className={classes.iconInfo}>
                                    nvatuan3@gmail.com
                                </span>
                            </Typography>
                            <Typography className={classes.iconInfo}>
                                <Button href="https://www.facebook.com/tuanio1211/" className={classes.iconInfo} target="_blank" color="primary">
                                    <FacebookIcon />
                                </Button>
                                <span style={{ marginLeft: "0.5em" }} className={classes.iconInfo}>
                                    Tuấn Nguyễn
                                </span>
                            </Typography>
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={2} className={classes.info}>
                        <Typography variant="h6" component="h6">
                            Học vấn
                        </Typography>
                        
                        <Typography className={classes.info}>
                        
                            <Typography>
                                <Typography style={{ fontWeight: "bold", fontSize: "smaller" }}>
                                    <em>8/2019 - Hiện tại</em>
                                </Typography>
                                <Typography style={{ fontSize: "0.9em"}}>
                                    Khoa Học Dữ Liệu / Đại học Công Nghiệp Thành phố Hồ Chí Minh
                                </Typography>                
                            </Typography>       

                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}