import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { router } from "./routes";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <Theme>
      <RouterProvider router={router}></RouterProvider>
    </Theme>
  );
}

export default App;
