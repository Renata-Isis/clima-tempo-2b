//Config React Router
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";

function App() {
  
 
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
