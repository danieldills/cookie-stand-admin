import React from "react";

function LoginForm() {
  return (
    <div className="w-1/2 p-8 mx-auto my-16 text-center bg-green-400">
      <h3>Username</h3>
      <input name="email" type="email" className="w-3/4" />
      <h3 className="pt-8">Password</h3>
      <input name="password" type="password" className="w-3/4" />
      <button className="w-1/3 p-3 mt-8 bg-green-200">Sign In</button>
    </div>
  );
}

export default LoginForm;
