"use client";

import { ReactNode } from "react";

interface adminProps{
    children: ReactNode;
  className?: string;
  appName?: string;
}

 export const Admin = ({children,appName,className} :adminProps) => {
  return (
    <div className={className} >
      {children}
    </div>
  )
}


