import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { loginUser } from "../../services/auth.service";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import type { LoginRequest } from "../../types/auth";


function LoginForm() {
  const {
    register,
    handleSubmit,
  } = useForm<LoginRequest>();

  const { login } = useAuth();
  const navigate = useNavigate();
  
  const onSubmit = async (data: LoginRequest) => {
  try {
    const response = await loginUser(data);

    if (
      response.success &&
      response.user &&
      response.token
    ) {
      login(response.user, response.token);

      navigate("/dashboard");
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        {...register("email")}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        {...register("password")}
      />

      <Button type="submit" fullWidth>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;