import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function UnitForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Units
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="unit1"
            label="Unit 1 Name"
            fullWidth
            onChange={val => localStorage.setItem("unit1", val)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="unit2"
            label="Unit 2"
            fullWidth
            onChange={val => localStorage.setItem("unit2", val)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="unit3"
            label="Unit 3"
            fullWidth
            onChange={val => localStorage.setItem("unit3", val)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
