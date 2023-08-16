import { Box,  Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input as AntdInput } from "antd";
import { LoadingButton } from "@mui/lab";

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface Password {
  password: string;
  confirmPassword: string;
}
const schema: yup.ObjectSchema<Password> = yup
  .object({
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})/,
        "Must Contain 10 Characters, One Uppercase, One Lowercase, One Number"
      )
      .required("Please enter your password"),
    confirmPassword: yup
      .string()
      .required("Please comfirm your password")
      .oneOf([yup.ref("password")], "Password not macth"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;
function RegisterWithPasswordPage() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box width={"350px"}>
        <Typography variant="h5">Create password</Typography>
        <Typography variant="body2">
          Use a minimum of 10 characters, including uppercase letters, lowercase
          letters and numbers.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box marginBottom={2}>
            <label>Password</label>

            {errors.password?.message ? (
              <>
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
                <Typography variant="body2" margin={1} style={{ color: "red" }}>
                  {errors.password?.message}
                </Typography>
              </>
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
          </Box>
          <Box marginBottom={2}>
            <label>Confirm password</label>
            {errors.confirmPassword?.message ? (
              <>
                <Controller
                  render={({ field }) => (
                    <AntdInput.Password
                      {...field}
                      placeholder="Confirm a password"
                      status="error"
                      suffix={<ErrorOutlineOutlinedIcon />}
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  )}
                  name="confirmPassword"
                  control={control}
                />
                <Typography variant="body2" margin={1} style={{ color: "red" }}>
                  {errors.confirmPassword?.message}
                </Typography>
              </>
            ) : (
              <Controller
                render={({ field }) => (
                  <AntdInput.Password
                    {...field}
                    placeholder="Confirm a password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                )}
                name="confirmPassword"
                control={control}
              />
            )}
          </Box>
          <LoadingButton
            sx={{
              backgroundColor: "#4178a5",
              "&:hover": {
                backgroundColor: "#68a5d6",
                cursor: "pointer",
              },
              marginBottom: 2,
            }}
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            fullWidth={true}
          >
            create account
          </LoadingButton>
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

export default RegisterWithPasswordPage;
