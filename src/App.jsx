import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch" element={<WatchPage />} />
      </Route>
    </Routes>
  );
}

export default App
