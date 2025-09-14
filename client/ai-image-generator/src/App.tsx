import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ChatBot from "./pages/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </>
  );
}

export default App;
