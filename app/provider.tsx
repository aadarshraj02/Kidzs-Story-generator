import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const provider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default provider;
