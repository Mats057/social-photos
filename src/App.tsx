import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <header></header>
      <Outlet />
      <footer></footer>
    </>
  );
}
