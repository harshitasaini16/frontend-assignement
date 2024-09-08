import { Route, Routes } from "react-router-dom";
import { Main } from "./components/main/Main";
import { Dashboard } from "./components/dashboard/Dashboard";

export const Redirections = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
