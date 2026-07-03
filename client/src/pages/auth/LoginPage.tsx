import Card from "../../components/ui/Card";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthFooter from "../../components/auth/AuthFooter";
import LoginForm from "../../components/auth/LoginForm";

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <Card className="w-full max-w-md">
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue"
        />

        <LoginForm />

        <p className="mt-4 text-center text-sm text-cyan-600 cursor-pointer">
          Forgot Password?
        </p>

        <AuthFooter
          text="Don't have an account?"
          linkText="Register"
          linkTo="/register"
        />
      </Card>
    </div>
  );
}

export default LoginPage;