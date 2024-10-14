import React from "react";
import Counter from "./conponents/Counter";
import UserDetails from "./conponents/userDetails";
import UserList from "./conponents/useEffect";
import App from "next/app";

export default function page() {
  return (
    <div>
      <UserList />

      <UserDetails />
      <Counter />
    </div>
  );
}
