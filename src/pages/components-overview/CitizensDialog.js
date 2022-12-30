import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Typography,
  Grid,
  Divider,
  FormControlLabel,
  FormHelperText,
  Link,
  Checkbox,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  Stack,
  MenuItem,
} from "@mui/material/";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import * as Yup from "yup";
import { Formik } from "formik";
import AnimateButton from "components/@extended/AnimateButton";
import { Link as RouterLink } from "react-router-dom";
export default function CitizensDialog({
  dialogVisibility,
  handleDialogClose,
}) {
  const [checked, setChecked] = React.useState(false);
  const [showaddress, setShowaddress] = React.useState(false);
  const handleClickShowaddress = () => {
    setShowaddress(!showaddress);
  };

  const handleMouseDownaddress = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Dialog open={dialogVisibility} onClose={handleDialogClose}>
        <DialogTitle>
          {" "}
          <Typography variant="h5">Add a citizen</Typography>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              name: "",
              address: "",
              taxNumber: "",
              taxStatus: "",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().max(255).required("name is required"),
              address: Yup.string().required("address is required"),
              taxNumber: Yup.string().required("Tax number is required"),
              taxStatus: Yup.string().required("Tax status is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              try {
                setStatus({ success: false });
                setSubmitting(false);
              } catch (err) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }}>
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="name">Name</InputLabel>
                      <OutlinedInput
                        id="name"
                        type="name"
                        value={values.name}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="John Doe"
                        fullWidth
                        error={Boolean(touched.name && errors.name)}
                      />
                      {touched.name && errors.name && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-name">
                          {errors.name}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="address">Address</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.address && errors.address)}
                        id="address"
                        value={values.address}
                        name="address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter Address"
                      />
                      {touched.address && errors.address && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-address">
                          {errors.address}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="address">Tax Number</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.taxNumber && errors.taxNumber)}
                        id="taxNumber"
                        value={values.taxNumber}
                        name="taxNumber"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Tax Number"
                      />
                      {touched.address && errors.address && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-taxNumber">
                          {errors.taxNumber}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="address">Tax Status</InputLabel>
                      <Select
                        fullWidth
                        error={Boolean(touched.taxStatus && errors.taxStatus)}
                        id="taxStatus"
                        value={values.taxStatus}
                        name="taxStatus"
                        label="Tax Status"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Tax Status">
                        <MenuItem value={10}>Pending</MenuItem>
                        <MenuItem value={20}>Approved</MenuItem>
                        <MenuItem value={30}>Rejected</MenuItem>
                      </Select>
                      {touched.taxStatus && errors.taxStatus && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-taxStatus">
                          {errors.taxStatus}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={12} lg={12}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between">
                      <Grid item>
                        <Typography variant="h5"></Typography>
                      </Grid>
                      <DialogActions spacing={1}>
                        <Button
                          onClick={handleDialogClose}
                          variant="contained"
                          color="secondary"
                          size="small">
                          Cancel
                        </Button>
                        <Button
                          onClick={handleDialogClose}
                          disableElevation
                          disabled={isSubmitting}
                          size="small"
                          type="submit"
                          variant="contained"
                          color="primary">
                          Add Citizen
                        </Button>
                      </DialogActions>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
