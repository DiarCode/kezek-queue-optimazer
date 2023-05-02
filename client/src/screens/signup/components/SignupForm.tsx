import { Button } from "@/shared/components/ui/buttons/Button";
import { InputField } from "@/shared/components/ui/input/Input";
import { Text } from "@/shared/components/ui/text/Text";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { SignupDTO } from "@/shared/types/auth/signup.dto";
import Link from "next/link";
import { useForm } from "react-hook-form";

export const SignupForm = () => {
  const { register, handleSubmit } = useForm<SignupDTO>();

  const onSignupSubmit = (data: SignupDTO) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSignupSubmit)}
      className="flex flex-col flex-1 gap-y-4"
    >
      <div>
        <Text required text="First Name" className="mb-2" />
        <InputField
          placeholder="Carla"
          type="text"
          {...register("fname", { required: true })}
        />
      </div>

      <div>
        <Text required text="Second Name" className="mb-2" />
        <InputField
          placeholder="Martines"
          type="text"
          {...register("lname", { required: true })}
        />
      </div>

      <div>
        <Text required text="Date of birth" className="mb-2" />
        <InputField
          placeholder="11/03/2004"
          type="date"
          {...register("dob", { required: true })}
        />
      </div>

      <div>
        <Text required text="Email" className="mb-2" />
        <InputField
          placeholder="example@gmail.com"
          type="text"
          {...register("email", { required: true })}
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
        <p>Already have an account?</p>
        <Link href={PAGES_LINKS.Login.link}>
          <p className="text-blue-600 underline text-sm">Log In</p>
        </Link>
      </div>
    </form>
  );
};
