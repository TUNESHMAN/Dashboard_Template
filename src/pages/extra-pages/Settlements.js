// material-ui
import { Typography, Grid } from "@mui/material";
import OrderTable from "pages/dashboard/OrdersTable";

// project import
import MainCard from "components/MainCard";

// ==============================|| CITIZENS PAGE ||============================== //

const Settlements = () => (
  <Grid container rowSpacing={4.5} columnSpacing={2.75}>
    <Grid item xs={12} md={12} lg={12}>
      {/* <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Settlements</Typography>
        </Grid>
        <Grid item />
      </Grid> */}
      <MainCard sx={{ mt: 2 }} content={false}>
        <OrderTable />
      </MainCard>
    </Grid>
  </Grid>
);

export default Settlements;
