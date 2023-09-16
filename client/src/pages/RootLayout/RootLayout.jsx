import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>this is header</header>
      <main>
        <Outlet />
      </main>
      <footer>this is footer</footer>
    </>
  );
}

export default RootLayout;
