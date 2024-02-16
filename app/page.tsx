'use client'
//import { getServerSession } from "next-auth";
//import { authOptions } from "./utils/auth";

import { SessionProvider } from "next-auth/react";
import { HomeBus } from "./components/ui/bus/HomeBus";

export default function App() {
  // const session = await getServerSession(authOptions);



  return (
    <SessionProvider  >
      <HomeBus />
    </SessionProvider>
  );
}
