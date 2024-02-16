import { FaLock, FaUserPlus } from "react-icons/fa";
import { Link, useSearchParams, useNavigate } from "@remix-run/react";
import { useEffect } from "react";

function AuthForm() {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("mode"));
  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {searchParams.get("mode") === "login" ? <FaLock /> : <FaUserPlus />}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>
          {searchParams.get("mode") === "login" ? "Log in" : "Create User"}
        </button>
        <Link
          to={
            searchParams.get("mode") === "login"
              ? "/auth?mode=signup"
              : "/auth?mode=login"
          }
        >
          {searchParams.get("mode") === "login"
            ? "Create new user"
            : "Log in with existing user"}
        </Link>
      </div>
    </form>
  );
}

export default AuthForm;
