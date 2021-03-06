// import React, { useState, useEffect } from "react";

// import Grid from "@material-ui/core/Grid";
import { Paper, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import SportsKabaddiOutlinedIcon from '@material-ui/icons/SportsKabaddiOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        padding: "1em",
        boxSizing: "border-box"
    },
    infoTime: {
        fontWeight: "bold",
        fontSize: "smaller",
        fontStyle: "italic"
    },
    infoGeneral: {
        padding: "0.4em 0",
        boxSizing: "border-box"
    },
    iconInfo: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
    },
}));

export default function SecondCol(props) {
    const classes = useStyles();

    return (
        <>
            <Paper elevation={2} className={classes.root}>
                <Typography>
                    <Typography variant="h6" component="h6" className={classes.iconInfo}>
                        <WorkOutlineIcon />
                        <span style={{ marginLeft: 5 }}>Công việc</span>
                    </Typography>
                    <Typography className={classes.root}>

                        <Typography className={classes.infoGeneral}>
                            <Typography className={classes.infoTime}>
                                5/2021 - Hiện tại
                            </Typography>
                            <Typography>
                                Internship Data Engineer part-time tại Weai
                            </Typography>
                        </Typography>

                    </Typography>
                </Typography>

                <Typography>
                    <Typography variant="h6" component="h6" className={classes.iconInfo}>
                        <EmojiEventsOutlinedIcon />
                        <span style={{ marginLeft: 5 }}>Đạt được</span>
                    </Typography>
                    <Typography className={classes.root}>

                        <Typography className={classes.infoGeneral}>
                            <Typography className={classes.infoTime}>
                                11/2019
                            </Typography>
                            <Typography>
                                Giải <u>khuyến khích</u> ACM/ICPC vòng Châu Á - Team IUH.Good_Dignit tại Đà Nẵng
                            </Typography>
                        </Typography>

                        <Typography className={classes.infoGeneral}>
                            <Typography className={classes.infoTime}>
                                11/2020
                            </Typography>
                            <Typography>
                                <u>Abstract</u> và <u>Poster</u> bài báo <b>ỨNG DỤNG HỌC MÁY DỰ ĐOÁN MỨC ĐỘ Ô NHIỄM KHÔNG KHÍ DỰA VÀO DỮ LIỆU KHÍ TƯỢNG TRONG QUÁ KHỨ</b> được đăng Kỷ yếu hội nghị Khoa Học Trẻ IUH 2020
                            </Typography>
                        </Typography>

                        <Typography className={classes.infoGeneral}>
                            <Typography className={classes.infoTime}>
                                12/2020
                            </Typography>
                            <Typography>
                                Giải <u>khuyến khích</u> khối Chuyên Tin, Olympic Tin học Sinh Viên Việt Nam tại Cần Thơ
                            </Typography>
                        </Typography>

                        <Typography className={classes.infoGeneral}>
                            <Typography className={classes.infoTime}>
                                4/2021
                            </Typography>
                            <Typography>
                                Giải <u>nhì</u> cuộc thi khai phá dữ liệu TDMU - Entropy Data Analytics
                            </Typography>
                        </Typography>

                    </Typography>
                </Typography>

                <Typography>
                    <Typography variant="h6" component="h6" className={classes.iconInfo}>
                        <FitnessCenterOutlinedIcon />
                        <span style={{ marginLeft: 5 }}>Dự án cá nhân</span>
                    </Typography>
                    <Typography className={classes.root}>

                        <Typography className={classes.infoGeneral}>
                            <Typography className={classes.infoTime}>
                                1/2021 - 2/2021
                            </Typography>
                            <Typography>
                                <Typography>
                                    <Link href="http://eng-flask.herokuapp.com" target="_blank" color="primary">
                                        Engflask
                                    </Link>
                                </Typography>
                                <Typography>                                    
                                    Trang web học từ vựng Tiếng anh. Các từ sẽ cho người dùng tự thêm vào thành một danh sách. Trang web sẽ đưa từ lên trên cùng sau một khoảng thời gian ngắn. Giúp gợi nhớ lại và học từ vựng tốt hơn.
                                    Các công nghệ sử dụng: Flask, PostgreSQL
                                </Typography>
                            </Typography>
                        </Typography>

                        <Typography className={classes.infoGeneral}>
                            <Typography className={classes.infoTime}>
                                6/2021
                            </Typography>
                            <Typography>
                                <Typography>
                                    <Link href="https://catmew.vercel.app" target="_blank" color="primary">
                                        Cat Tournament
                                    </Link>
                                </Typography>
                                <Typography>
                                    Trang web chứa đầy mèo, và cũng chỉ toàn mèo. Trang web này có ý tưởng dựa trên Facemash của Mark Zuckerberg. Sẽ đưa hai chú mèo ngẫu nhiên lên cùng một trang và để người dùng vote theo sở thích. Những chú mèo được vote nhiều nhất sẽ được lên trên top của bảng xếp hạng. Trang web với mục đích giải trí là chính. Các công nghệ sử dụng: ReactJS, MaterialUI, Flask, SQLAlchemy.
                                </Typography>
                            </Typography>
                        </Typography>         

                    </Typography>
                </Typography>

                <Typography>
                    <Typography variant="h6" component="h6" className={classes.iconInfo}>
                        <SportsKabaddiOutlinedIcon />
                        <span style={{ marginLeft: 5 }}>Dự án đồng đội</span>
                    </Typography>
                    <Typography className={classes.root}>
                        <Typography className={classes.infoGeneral}>
                            <Typography className={classes.infoTime}>
                                2/2021 - Hiện tại
                            </Typography>
                            <Typography>
                                Hệ thống dashboard trực quan hóa dữ liệu Vis For Teacher, giúp trực quan các số liệu điểm số của các sinh viên thành các biểu đồ giúp giáo viên chủ nhiệm tại IUH có thể quản lí lớp một cách đơn giản hơn. Các công nghệ sử dụng: ReactJS, Material UI, Flask, PostgreSQL
                            </Typography>
                        </Typography>               

                    </Typography>
                </Typography>
            </Paper>
        </>
    )
}