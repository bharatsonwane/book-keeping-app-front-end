import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import AuthLayout from "src/layouts/auth";
import { LoginSchema } from "../schema";
import FormError from "src/molecules/form-error";
import Password from "src/molecules/password";
import { useLoginMutation } from "../../../redux/api/auth.api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2 } from "lucide-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginFn, { error, isLoading }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    const response = await loginFn(data);
    if (response.data) {
      navigate("/app/auth-loading");
    }
  };

  return (
    <AuthLayout>
      <div className="flex w-full justify-center items-center h-full ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="pb-6">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Login</CardTitle>
              <CardDescription>
                Enter your credentials to get started
              </CardDescription>
            </CardHeader>

            <CardContent className="w-[400px]">
              <div className="flex flex-col gap-2">
                <Label>Email address</Label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="text"
                      placeholder="john@example.com"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col  pt-3">
                <Label>Password</Label>
                <Password
                  type="text"
                  fieldName={"password"}
                  control={control}
                  placeholder="**********"
                  errors={errors}
                />
              </div>

              <FormError
              //  error={error?.data?.err}
              />

              <Button
                type="submit"
                className="mt-2 w-full"
                // disabled={isLoading}
              >
                {false ? (
                  <>
                    Login <Loader2 className="animate-spin size-5" />
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
