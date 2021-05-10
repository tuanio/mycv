import React, { useState } from "react";

import Me from "../../assets/me.jpg";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';

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
    },
    infoTime: {
        fontWeight: "bold",
        fontSize: "smaller",
        fontStyle: "italic"
    },
    infoDescribe: {
        fontSize: "0.9em"
    }
}));

export default function FirstCol(props) {
    const classes = useStyles();
    const [joyList, setJoyList] = useState(['Bơi lội', 'Đọc sách'])
    setJoyList(['Bơi lội', 'Đọc sách']);

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
                        <Typography variant="h6" component="h6" className={classes.iconInfo}>
                            <PermContactCalendarOutlinedIcon />
                            <span style={{ marginLeft: 5 }}>Liên hệ</span>
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
                        <Typography variant="h6" component="h6" className={classes.iconInfo}>
                            <MenuBookOutlinedIcon />
                            <span style={{ marginLeft: 5 }}>Học vấn</span>
                        </Typography>
                        
                        <Typography className={classes.info}>
                        
                            <Typography>
                                <Typography className={classes.infoTime}>
                                    8/2019 - Hiện tại
                                </Typography>
                                <Typography className={classes.infoDescribe}>
                                    Khoa Học Dữ Liệu / Đại học Công Nghiệp Thành phố Hồ Chí Minh
                                </Typography>                
                            </Typography>       

                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={2} className={classes.info}>
                        <Typography variant="h6" component="h6" className={classes.iconInfo}>
                            <SentimentVerySatisfiedOutlinedIcon />
                            <span style={{ marginLeft: 5 }}>Sở thích</span>
                        </Typography>
                        
                        <Typography className={classes.info}>
                            <Grid container spacing={1}>
                                {
                                    joyList.map((item) => (
                                        <Grid item style={{ textAlign: "center" }} key={item}>
                                            <Paper elevation={2} style={{ boxSizing: "border-box", padding: "2px 5px" }}>
                                                {item}
                                            </Paper>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Typography>    

                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}