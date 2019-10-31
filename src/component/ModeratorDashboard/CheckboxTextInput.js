import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function CheckboxTextInput() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Answers
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <TextField
            required
            id="unit1a1"
            label="Answer 1"
            fullWidth
            onChange={val => localStorage.setItem("unit1a1 ", val)}
          />
          <TextField
            required
            id="unit1a2"
            label="Answer 2"
            fullWidth
            onChange={val => localStorage.setItem("unit1a2", val)}
          />
          <TextField
            required
            id="unit1a3"
            label="Answer 3"
            fullWidth
            onChange={val => localStorage.setItem("unit1a3", val)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
