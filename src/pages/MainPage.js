import "../App.css";
import "../w3.css";

import React from "react";
import { Typography } from "@mui/material";
import { Paper as MuiPaper } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import { observer } from "mobx-react";

import { WeatherTable } from "./components/WeatherTable";

export const MainPage = observer(() => {

    return (
        <Grid
        container
        alignItems="center"
        spacing={4}
        marginLeft={5}
        marginRight={5}
        id="overview-header"
      >

            <Grid item xs={12} alignItems="center" marginTop={8}>
                <MuiPaper>
                <Grid container padding={6} spacing={5}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            gutterBottom
                            style={{ fontWeight: 600 }}
                            color="primary"
                        >
                            <br /> Weather Forecast
                        </Typography>                        
                    </Grid>
                    <Grid item xs={12}>
                        <WeatherTable />
                    </Grid>
                </Grid>
                </MuiPaper>    
            </Grid>


         </Grid>
    );


});    
