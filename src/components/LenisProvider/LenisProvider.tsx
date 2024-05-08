// @ts-nocheck
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LenisProvider = ({ children }: Props) => {
  return (
    <ReactLenis root options={{ duration: 2 }}>
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
