import { Route, Routes } from "react-router-dom";
import "./App.css";

import NotFound from "./pages/notFound/NotFound";
import Layout from "./components/layout/Layout";

import SignIn from "./authorization/signIn/SignIn";
import MainPage from "./pages/mainPage/MainPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/signIn" element={<SignIn />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
