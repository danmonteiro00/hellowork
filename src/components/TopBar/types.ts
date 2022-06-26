import { ReactNode } from "react";

export interface ITopBarProps {
  isAuthenticated: boolean;
  doLogout(): void;
}
