import * as React from "react";
import { Tabs, Tab, Box, Grid, Divider } from "@mui/material";

export default function HomeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Grid>
      <Box sx={{ bgcolor: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
        >
          <Tab label="Editorial" />
          <Tab label="Following" />
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ mr: 2, ml: 2 }}
          />
          <Tab label="Girls vs Stereotypes" />
          <Tab label="Current Events" />
          <Tab label="Wallpapers" />
          <Tab label="3D Renders" />
          <Tab label="Textures & Patterns" />
          <Tab label="Experimental" />
          <Tab label="Architecture" />
          <Tab label="Nature" />
          <Tab label="Business & Work" />
          <Tab label="Fashion" />
          <Tab label="Film" />
          <Tab label="Food & Drink" />
        </Tabs>
      </Box>
    </Grid>
  );
}
