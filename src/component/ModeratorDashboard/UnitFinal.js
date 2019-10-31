import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function UnitFinal() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Units
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="unit1q1"
            label="Final Question 1"
            fullWidth
            onChange={val => localStorage.setItem("fq1", val)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="unit1q2"
            label="Final Question 2"
            fullWidth
            onChange={val => localStorage.setItem("fq2", val)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="unit2q1"
            label="Final Question 3"
            fullWidth
            onChange={val => localStorage.setItem("fq3", val)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="unit2q2"
            label="Final Question 4"
            fullWidth
            onChange={val => localStorage.setItem("fq4", val)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
