import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CheckboxTextInput from "./CheckboxTextInput";

export default function UnitQuestions() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Unit Based Questions
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="unit1q1"
            label="Unit 1 Question "
            fullWidth
            onChange={val => localStorage.setItem("unit1q", val)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <CheckboxTextInput />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="unit1q2"
            label="Unit 2 Question "
            fullWidth
            onChange={val => localStorage.setItem("unit2q", val)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <CheckboxTextInput />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="unit2q1"
            label="Unit 3 Question "
            fullWidth
            onChange={val => localStorage.setItem("unit3q", val)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <CheckboxTextInput />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
