import AuthForm from "~/components/auth/AuthForm";
import AuthCSS from "~/styles/auth.css";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: AuthCSS },
];

export const meta: MetaFunction = () => {
  return [
    {
      title: "Auth ",
    },
  ];
};

export default function AuthPage() {
  return <AuthForm />;
}
