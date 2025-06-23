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
import Password from "src/molecules/password";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../schema";
import SelectComponent from "src/molecules/select";
import AuthLayout from "src/layouts/auth";
import { useRegisterTenantMutation } from "../../../redux/api/auth.api";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import FormError from "src/molecules/form-error";

const Signup = () => {
  const [signUpFn, { error, isLoading }] = useRegisterTenantMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    console.log("data", data);
    const response = await signUpFn(data);
    if (response.data) {
      toast.success(response.data.msg);
    }
  };
  return (
    <AuthLayout>
      <div className="flex w-full justify-center items-center h-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Create your account</CardTitle>
              <CardDescription>
                Enter your details to get started
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

              <div className="flex flex-col gap-2">
                <Label>Tenant name</Label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="text"
                      placeholder="Amazon"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <Label>Domain name</Label>
                <Controller
                  control={control}
                  name="domain"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="text"
                      placeholder="Something related domain.."
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>

              {/* 
              <FormError 
              error={error?.data?.err} /> */}

              <Button
                type="submit"
                className="mt-4 w-full"
                // disabled={isLoading}
              >
                {false ? (
                  <>
                    Create Account <Loader2 className="animate-spin size-5" />
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
