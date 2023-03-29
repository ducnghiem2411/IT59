import { PhotoCamera } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import LightTextField from "../components/LightTextField";
import { Small } from "../components/Typography";
import { useFormik } from "formik";
import { ChangeEvent, FC, useState } from "react";
import * as Yup from "yup";
import useAuth from "hooks/useAuth";

// styled components
const ButtonWrapper = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[200]
      : alpha(theme.palette.primary[100], 0.1),
}));

const UploadButton = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  border: "2px solid",
  alignItems: "center",
  justifyContent: "center",
  borderColor: theme.palette.background.paper,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[400]
      : alpha(theme.palette.background.paper, 0.9),
}));

const AccountSettings: FC = () => {
  const { userAuthInfo } = useAuth()

  const initialValues = {
    fullName: userAuthInfo?.fullName || "",
    email: userAuthInfo?.email || "",
    phone: userAuthInfo?.phone || "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is Required!"),
    email: Yup.string().email().required("Email is Required!"),
    phone: Yup.number().min(8).required("Phone is Required!")
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: () => {},
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log('file', e.target.files[0])
      setFile(e.target.files[0]);
    }
  };
  
  const [file, setFile] = useState<File>()

  const handleUpdatePassword = () => {

  }

  const handleUpdateInfo = () => {

  }

  return (
    <Box pt={2} pb={4}>
      <Card sx={{ padding: 4 }}>
        <Grid container spacing={5}>
          
          <Grid item xs={4}>
            <Card
              sx={{
                padding: 3,
                boxShadow: 2,
                minHeight: 510,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <ButtonWrapper>
                <UploadButton>
                  <label htmlFor="upload-btn">
                    <input accept="image/*" id="upload-btn" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                    <IconButton component="span">
                      <PhotoCamera sx={{ fontSize: 26, color: 'white' }} />
                    </IconButton>
                  </label>
                </UploadButton>
              </ButtonWrapper>

              <Small marginTop={2} maxWidth={200} lineHeight={1.9} display="block" textAlign="center" color="text.disabled">
                Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
              </Small>
            </Card>
          </Grid>

          <Grid item xs={8} container direction="column" spacing={2}>
            <Grid item md={6} xs={12}>
              <Card sx={{ padding: 3, boxShadow: 2 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <LightTextField
                        fullWidth
                        name="fullName"
                        placeholder="Full Name"
                        value={values.fullName}
                        onChange={handleChange}
                        error={Boolean(touched.fullName && errors.fullName)}
                        helperText={touched.fullName && errors.fullName}
                      />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <LightTextField
                        fullWidth
                        name="email"
                        placeholder="Email Address"
                        value={values.email}
                        onChange={handleChange}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <LightTextField
                        fullWidth
                        name="phone"
                        placeholder="Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" onClick={handleUpdateInfo}>
                        Cập nhật
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>

            <Grid item md={6} xs={12}>
              <Card sx={{ padding: 3, boxShadow: 2 }} title="Update">
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <LightTextField
                        fullWidth
                        name="newPassword"
                        placeholder="New Password"
                        value={values.newPassword}
                        onChange={handleChange}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <LightTextField
                        fullWidth
                        name="confirmPassword"
                        placeholder="Confirm new password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <LightTextField
                        fullWidth
                        name="oldPassword"
                        placeholder="Old Password"
                        value={values.oldPassword}
                        onChange={handleChange}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" onClick={handleUpdatePassword}>
                        Cập nhật
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>
          </Grid>

        </Grid>
      </Card>
    </Box>
  )
};

export default AccountSettings;
