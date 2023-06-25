import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";

import VideoComponent from "../src/components/video";
import Map from "../src/components/map";
import sampleLocation from "../src/data/sample_location.json";
export default function Index() {
  const [selected, setSelected] = useState(sampleLocation[0]);
  return (
    <Grid container direction='column' spacing={3} style={{ padding: "50px" }}>
      <Grid item xs={12}>
        <Grid
          container
          component={Paper}
          style={{ borderRadius: "25px", overflow: "hidden" }}
        >
          <Map setSelected={setSelected} />
        </Grid>
      </Grid>
      {/* table */}
      {selected && (
        <Grid item xs={12}>
          <Grid container component={Paper} style={{ borderRadius: "25px" }}>
            <VideoComponent selected={selected} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
