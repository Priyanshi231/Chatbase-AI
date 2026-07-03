import { Link } from "react-router-dom";

interface AuthFooterProps {
  text: string;
  linkText: string;
  linkTo: string;
}

function AuthFooter({
  text,
  linkText,
  linkTo,
}: AuthFooterProps) {
  return (
    <p className="mt-6 text-center text-sm">
      {text}{" "}
      <Link
        to={linkTo}
        className="font-medium text-cyan-600 hover:underline"
      >
        {linkText}
      </Link>
    </p>
  );
}

export default AuthFooter;