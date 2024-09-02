import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/pages/logo/Logo";
import NotFound from "./components/pages/notFound/NotFound";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Logo />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
