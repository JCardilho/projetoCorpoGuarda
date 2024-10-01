import "./App.css";
import { Login } from "./components/Login";

export function App() {
  return (
    <div
      className="flex justify-center items-center w-scren h-screen bg-[url('./assets/logo1.jpg')] bg-no-repeat bg-cover
    "
    >
      <Login />
    </div>
  );
}
