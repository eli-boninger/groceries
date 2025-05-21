import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Alert from "../../components/feedback/alert";
import Button from "../../components/form/button";
import Input from "../../components/form/input";
import InputBase from "../../components/form/inputBase";
import { signIn } from "../../services/AuthService";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [signInError, setSignInError] = useState(false);
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const res = await signIn(target.email.value, target.password.value);
    if (!res.success) {
      setSignInError(true);
    } else {
      setSignInError(false);
      //move on
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-3xl/9 text-center">Groceries</h1>
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {signInError && (
          <Alert header="Please try again" text="Incorrect email or password" />
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            inputProps={{
              type: "email",
              required: true,
              autoComplete: "email",
            }}
            name="email"
          />

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <InputBase
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
              />
            </div>
          </div>

          <div>
            <Button type="submit">Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
