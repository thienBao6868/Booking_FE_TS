import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input as AntdInput } from "antd";
import { LoadingButton } from "@mui/lab";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {  useNavigate } from "react-router-dom";

const schema = yup
  .object({
    password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})/,
      "Must Contain 10 Characters, One Uppercase, One Lowercase, One Number"
    )
    .required("Please enter your password")
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function SigninWithPasswordPage() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
 
  const onSubmit = (data: FormData) => {
    console.log(data);
    if (data.password) navigate("/", { replace: true });
  };
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box width={"350px"}>
        <Typography variant="h5">Enter your password</Typography>
        <Typography variant="body1">
          Please enter your Booking.com password for your email.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Password</label>
          {errors.password?.message ? (
            <Controller
              render={({ field }) => (
                <AntdInput.Password
                  {...field}
                  placeholder="Enter your password"
                  status="error"
                  suffix={<ErrorOutlineOutlinedIcon />}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              )}
              name="password"
              control={control}
            />
          ) : (
            <Controller
              render={({ field }) => (
                <AntdInput.Password
                  {...field}
                  placeholder="Enter your password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              )}
              name="password"
              control={control}
            />
          )}
          <Typography variant="body2" margin={1} style={{ color: "red" }}>
            {errors.password?.message}
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
            Sign in
          </LoadingButton>
          <Divider>
            <Typography variant="body2">or</Typography>
          </Divider>
          <Box margin={1}>
            <Button variant="outlined" fullWidth sx={{ margin: 1 }}>
              Sign in with a verification link
            </Button>
            <Button variant="text" fullWidth sx={{ margin: 1 }}>
              Forgoten your password
            </Button>
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

export default SigninWithPasswordPage;
