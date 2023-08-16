import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input as AntdInput} from "antd";
import { LoadingButton } from "@mui/lab";
import "../style/signinPage.css";
import { LogoFaceboook, LogoGoogle, LogoPhone } from "../svg";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hook/useGlobalcontext";


const schema = yup
  .object({
    email: yup
      .string()
      .email("Please check if the email address you've entered is correct. ")
      .required("Please enter your email address"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

function SigninPage() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { checkEmail} = useGlobalContext();
  
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data: FormData) => {
    if(data.email) checkEmail(data.email)
    let from = location.state?.from?.pathname || "/";

    navigate(from, { replace: true});
  };

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box width={"350px"}>
        <Typography variant="h5">Sign in or create an account</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email address</label>
          {errors.email?.message ? (
            <Controller
              render={({ field }) => (
                <AntdInput
                  {...field}
                  placeholder="Enter your Email"
                  status="error"
                  suffix={<ErrorOutlineOutlinedIcon />}
                />
              )}
              name="email"
              control={control}
            />
          ) : (
            <Controller
              render={({ field }) => (
                <AntdInput {...field} placeholder="Enter your Email" />
              )}
              name="email"
              control={control}
            />
          )}
          <Typography variant="body2" margin={1} style={{ color: "red" }}>
            {errors.email?.message}
          </Typography>
          <LoadingButton
            sx={{
              backgroundColor: "#4178a5",
              "&:hover": {
                backgroundColor: "#68a5d6",
                cursor: "pointer",
              },
              marginBottom: 1,
            }}
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            fullWidth={true}
          >
            Continue with email
          </LoadingButton>
          <Divider>
            <Typography variant="body2">or use one of these options</Typography>
          </Divider>
          <Box
            sx={{ display: "flex", justifyContent: "space-around", padding: 2 }}
          >
            <Box
              padding={2}
              border={1}
              borderRadius={1}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
            >
              <LogoFaceboook />
            </Box>
            <Box
              display={"flex"}
              padding={2}
              border={1}
              borderRadius={1}
              justifyContent={"center"}
            >
              <LogoGoogle />
            </Box>
            <Box
              display={"flex"}
              padding={2}
              border={1}
              borderRadius={1}
              justifyContent={"center"}
            >
              <LogoPhone />
            </Box>
          </Box>
        </form>
        <Stack>
          <Divider />
          <Box mt={2}>
            <Typography variant="body2" textAlign={"center"}>
              By signing in or creating an account, you agree with our{" "}
              <span> </span>
              <Link> Terms & conditions</Link> and{" "}
              <Link>Privacy statement</Link>
            </Typography>
          </Box>
          <Stack p={2} />
          <Divider />
          <Box mt={2}>
            <Typography variant="body2" textAlign={"center"}>
              All rights reserved.
            </Typography>
            <Typography variant="body2" textAlign={"center"}>
              Copyright (2006 - 2023) - Booking.com™
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default SigninPage;
