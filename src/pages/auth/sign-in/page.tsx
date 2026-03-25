import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import * as yup from "yup";

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  capitalize,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";

import Logo from "@/components/logo/logo";
import { DEFAULTS } from "@/config";
import NiCrossSquare from "@/icons/nexture/ni-cross-square";
import NiEyeClose from "@/icons/nexture/ni-eye-close";
import NiEyeOpen from "@/icons/nexture/ni-eye-open";
// ✅ IMPORT AUTH SERVICE
import { login } from "@/services/authService";

const validationSchema = yup.object({
  username: yup.string().required("The field is required"),
  password: yup.string().required("The field is required"),
});

type InputErrorProps = {
  title: string;
};

const InputErrorTooltip = ({ title }: InputErrorProps) => {
  return (
    <Box className="relative">
      <Tooltip title={title} arrow className="absolute -top-1.5">
        <Button
          startIcon={<NiCrossSquare size="small" />}
          color="error"
          size="small"
          className="group icon-only bg-transparent! outline-0!"
        ></Button>
      </Tooltip>
    </Box>
  );
};

export default function Page() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const [apiError, setApiError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     console.log(JSON.stringify(values, null, 2));
  //     navigate(DEFAULTS.appRoot);
  //   },
  //   validateOnBlur: false,
  //   validateOnMount: false,
  // });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    validateOnBlur: false,
    validateOnMount: false,

    // ✅ UPDATED SUBMIT
    onSubmit: async (values) => {
      setLoading(true);
      setApiError("");

      try {
        await login(values.username, values.password);

        navigate(DEFAULTS.appRoot);
      } catch (error: any) {
        setApiError(error.message || "Login failed");
      } finally {
        setLoading(false);
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Box className="bg-waves flex min-h-screen w-full items-center justify-center bg-cover bg-center p-4">
      <Paper
        elevation={3}
        className="bg-background-paper shadow-darker-xs w-lg max-w-full rounded-4xl py-14"
      >
        <Box className="flex flex-col gap-4 px-8 sm:px-14">
          <Box className="flex flex-col">
            <Box className="mb-14 flex justify-center">
              <Logo classNameMobile="hidden" />
            </Box>

            <Box className="flex flex-col gap-10">
              <Box className="flex flex-col">
                <Typography variant="h1" component="h1" className="mb-2">
                  Sign in
                </Typography>
                <Typography variant="body1" className="text-text-primary">
                  Access your client account quickly and securely to get
                  started.
                </Typography>
              </Box>

              <Box className="flex flex-col gap-5">
                <Box
                  component={"form"}
                  onSubmit={(event) => {
                    setSubmitted(true);
                    formik.handleSubmit(event);
                  }}
                  className="flex flex-col"
                >
                  {/* ✅ API ERROR DISPLAY */}
                  {apiError && (
                    <Alert
                      severity="error"
                      className="mb-4"
                      icon={<NiCrossSquare />}
                    >
                      <AlertTitle>Error</AlertTitle>
                      {apiError}
                    </Alert>
                  )}
                  <FormControl
                    className="outlined"
                    variant="standard"
                    size="small"
                  >
                    <FormLabel component="label" className="flex flex-row">
                      ClientID
                      {formik.touched.username && formik.errors.username && (
                        <InputErrorTooltip title={formik.errors.username} />
                      )}
                    </FormLabel>
                    <Input
                      id="username"
                      name="username"
                      placeholder=""
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </FormControl>

                  <FormControl
                    className="outlined"
                    variant="standard"
                    size="small"
                  >
                    <FormLabel component="label" className="flex flex-row">
                      Password
                      {formik.touched.password && formik.errors.password && (
                        <InputErrorTooltip title={formik.errors.password} />
                      )}
                    </FormLabel>
                    <Input
                      size="small"
                      id="password"
                      name="password"
                      placeholder=""
                      autoComplete="off"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                          >
                            {showPassword ? (
                              <NiEyeClose
                                size="medium"
                                className="text-text-secondary"
                              />
                            ) : (
                              <NiEyeOpen
                                size="medium"
                                className="text-text-secondary"
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  {submitted && !formik.isValid && (
                    <Alert
                      severity="error"
                      icon={<NiCrossSquare />}
                      className="neutral bg-background-paper/60! mb-4"
                    >
                      <AlertTitle variant="subtitle2">
                        The following inputs have errors!
                      </AlertTitle>
                      {Object.entries(formik.errors).map(([key, value]) => {
                        return (
                          <Box
                            className="flex flex-row gap-0.5"
                            key={crypto.randomUUID()}
                          >
                            <Typography variant="body2" className="text-error">
                              {capitalize(key)}:
                            </Typography>
                            <Typography
                              variant="body2"
                              className="text-text-primary"
                            >
                              {value}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Alert>
                  )}
                  <Box className="flex flex-col gap-2">
                    {/* <Link
                      to="/auth/password-reset"
                      className="link-text-secondary link-underline-hover text-center text-sm font-semibold"
                    >
                      Reset Password
                    </Link> */}
                    {/* <Button type="submit" variant="contained" className="mb-4">
                      Continue
                    </Button> */}
                    <Button
                      type="submit"
                      variant="contained"
                      className="mb-4"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Continue"}
                    </Button>
                  </Box>

                  <Typography variant="body2" className="text-text-secondary">
                    By clicking Continue, you agree to the{" "}
                    <Link
                      target="_blank"
                      to="/auth/terms-and-conditions"
                      className="link-primary link-underline-hover"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      target="_blank"
                      to="/auth/privacy-policy"
                      className="link-primary link-underline-hover"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
