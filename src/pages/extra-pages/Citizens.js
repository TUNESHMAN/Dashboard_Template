// material-ui
import { Typography, Grid, Button, Stack } from "@mui/material";
import CitizensTable from "pages/dashboard/CitizensTable";
import * as React from "react";
// project import
import MainCard from "components/MainCard";
import CitizensDialog from "pages/components-overview/CitizensDialog";

// ==============================|| CITIZENS PAGE ||============================== //

const Citizens = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <CitizensDialog
        dialogVisibility={open}
        handleDialogClose={handleDialogClose}
      />
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">List of Citizens</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => handleClickOpen()}
                variant="contained"
                color="primary">
                Add Citizen
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <CitizensTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Citizens;
