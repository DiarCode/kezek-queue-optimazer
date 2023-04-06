import { Button } from "@/shared/components/ui/buttons/Button";
import { InputField } from "@/shared/components/ui/input/Input";
import { Text } from "@/shared/components/ui/text/Text";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { LoginDTO } from "@/shared/types/auth/login.dto";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginDTO>();

  const onLoginSubmit = (data: LoginDTO) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onLoginSubmit)}
      className="flex flex-col flex-1 gap-y-4"
    >
      <div>
        <Text required text="Email / Username" className="mb-2" />
        <InputField
          placeholder="example@gmail.com"
          type="text"
          {...register("emailOrUsername", { required: true })}
        />
      </div>

      <div className="mb-2">
        <Text required text="Password" className="mb-2" />
        <InputField
          placeholder="Password"
          type="password"
          {...register("password", { required: true, min: 5 })}
        />
      </div>

      <Button solid type="submit" className="mb-4">
        Login
      </Button>

      <div className="flex justify-center items-center gap-x-2 text-sm">
        <p>Do not have an account?</p>
        <Link href={PAGES_LINKS.Signup.link}>
          <p className="text-blue-600 underline text-sm">Sign Up</p>
        </Link>
      </div>
    </form>
  );
};
