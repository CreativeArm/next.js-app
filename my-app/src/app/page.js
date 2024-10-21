import React from "react";
import Counter from "./conponents/Counter";
import UserDetails from "./conponents/userDetails";
import UserList from "./conponents/useEffect";
import ContactForm from "./conponents/formHandling";

export default function page() {
  return (
    <div>
      <UserList />

      <UserDetails />
      <Counter />
      <ContactForm />
    </div>
  );
}
