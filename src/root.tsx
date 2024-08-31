import { Outlet } from "react-router-dom";
import AppHeader from "./components/Header";

export default function RootLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
