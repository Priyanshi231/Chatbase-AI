import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthFooter from "../../components/auth/AuthFooter";

function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <Card className="w-full max-w-md">
        <AuthHeader
          title="Create Account"
          subtitle="Join ChatBase AI today"
        />

        <div className="space-y-4">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
          />

          <Button fullWidth>
            Create Account
          </Button>
        </div>

        <AuthFooter
          text="Already have an account?"
          linkText="Login"
          linkTo="/login"
        />
      </Card>
    </div>
  );
}

export default RegisterPage;