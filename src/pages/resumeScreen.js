import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Title from "../components/title";
import Skill from "../components/skill";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MyStepper from "../components/MyStepper";
import Azi from "../components/Azi";
import ProfileImage from "../assets/images/profile.jpg";
import Helmet from "../components/Helmet";
import { getTranslate } from "../localization/index";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to right, #1d2429 0%, #2a2c3b 100%)",
  },
  skillGrid: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down("xs")]: {
      paddingRight: 5,
      paddingLeft: 5,
    },
  },
  skillSecondTitle: {
    marginLeft: 10,
  },
  titr: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
}));

export default function FarshidScreen() {
  const translate = getTranslate();
  const classes = useStyles();

  return (
    <Grid alignItems="flex-start" container className={classes.root}>
      <Helmet
        title={translate.name + " - " + translate.resume}
        description={translate.resumeDesc}
      />
      <Grid container style={{ marginTop: 30 }}>
        <Grid item xs={12} md={12} style={{ padding: 15 }}>
          <Azi
            image={ProfileImage}
            name={translate.name}
            teacherProps={["Front end developer", "UI/UX designer"]}
            teacherProps2={[
              "مسلط به طراحی فرانت اند وب سایت ها با  React js",
              "مسلط به طراحی و پیاده سازی پایگاه های داده SQL و محبوب ترین آن ها  SQL Server",
              "مسلط به HTML5 ، Css3، Boostrap",
              "مسلط به جاوا اسکریپت",
              " مسلط به طراحی واسط کاربری",
            ]}
            mobile="0426032420"
          />
        </Grid>
      </Grid>

      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title={translate.myskills} />
        <Grid container direction="row">
          <Grid item xs={12} md={6}>
            <Skill value={90} title="HTML5" />
            <Skill value={90} title="CSS3" />
            <Skill value={80} title="React " />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skill value={90} title="Bootstrap" />
            <Skill value={85} title="ES6" />
            <Skill value={90} title="SQL Sever 2008-2016" />
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title={translate.resume} />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <BusinessCenterIcon style={{ fontSize: 34 }} />
          <Typography className={classes.skillSecondTitle} variant="h4">
            {translate.workingexperience}
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: 15, marginBottom: 15 }}>
          <MyStepper steps={translate.workingSteps} />
        </Grid>
      </Grid>
    </Grid>
  );
}
