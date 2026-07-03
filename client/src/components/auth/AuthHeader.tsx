interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-6xl font-bold text-cyan-600">
        ChatBase AI
      </h1>

      <h2 className="mt-4 text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}

export default AuthHeader;