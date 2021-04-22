import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";

import Github from "../../assets/github.png";
import Kaggle from "../../assets/kaggle.png";
import Codeforces from "../../assets/codeforces.png";

import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "0 auto",
        padding: "20px 0",
        boxSizing: "border-box",
        padding: "0.4em"
    },
    linkIcon: {
        width: "5em",
    },
    linkComp: {
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
}));

export default function ThirdCol(props) {
    const classes = useStyles();
    const [skillList, setSkillList] = useState([
        'C/C++', 'Python', 'SQL', 'Flask', 'PostgreSQL', 'Trực quan hóa'
    ])

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.root} elevation={2}>
                        <Grid container>
                            <Grid item xs={11} style={{ margin: "10px auto", width: "100%" }}>
                                <Typography variant="h6" component="h6" className={classes.iconInfo}>
                                    <PermIdentityIcon />
                                    <span style={{ marginLeft: 5 }}>Một chút về tôi</span>
                                </Typography>
                                <Typography variant="p" component="p" className={classes.info}>
                                    Tôi có ước mơ là một ngày nào đó sẽ trở thành một nhà khoa học dữ liệu. Đem dữ liệu đến thông tin cho tất cả mọi người.
                                </Typography>
                            </Grid>

                            <Grid container spacing={1} alignContent="center">
                                
                                <Grid item xs={4} alignContent="center">
                                    <Button href="https://github.com/tuanio" target="_blank">
                                        <img alt="github" src={Github} className={classes.linkIcon} />
                                    </Button>
                                </Grid>
                                
                                <Grid item xs={4} alignContent="center">
                                    <Button href="https://www.kaggle.com/tuannguyenvananh" target="_blank">
                                        <img alt="kaggle" src={Kaggle} className={classes.linkIcon} />
                                    </Button>
                                </Grid>

                                <Grid item xs={4} alignContent="center">
                                    <Button href="https://codeforces.com/profile/tuanio" target="_blank">
                                        <img alt="codeforces" src={Codeforces} className={classes.linkIcon} />
                                    </Button>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={2} className={classes.root} className={classes.info}>
                        <Typography variant="h6" component="h6" className={classes.iconInfo}>
                            <VerifiedUserOutlinedIcon />
                            <span style={{ marginLeft: 5 }}>Chứng chỉ</span>
                        </Typography>

                        <Typography className={classes.info}>
                            <Typography>
                                <Typography style={{ fontWeight: "bold", fontSize: "smaller" }}>
                                    <em>9/2019</em>
                                </Typography>
                                <Typography style={{ fontSize: "0.9em"}}>
                                    Thi Toeic đầu vào ở trường đạt 630
                                </Typography>                
                            </Typography>    
                            
                        </Typography>

                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={2} className={classes.root} className={classes.info}>
                        <Typography variant="h6" component="h6" className={classes.iconInfo}>
                            <ColorLensOutlinedIcon />
                            <span style={{ marginLeft: 5 }}>Kỹ năng</span>
                        </Typography>

                        <Typography className={classes.info}>
                            <Grid container spacing={1}>
                                {
                                    skillList.map((item) => (
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