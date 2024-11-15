import { BrowserRouter, Route, Routes} from "react-router-dom";

// import Navbar from "./components/common/1-navbar/Navbar.tsx";
// import Footer from "./components/common/2-footer/Footer.tsx"

import Home from "@/pages/Home";
import About from "@/pages/About"
import PageNotFound from "@pages/PageNotFound/PageNotFound.tsx";

function App() {



  return (
    <div className="dark:bg-zinc-900 dark:text-zinc-300 text-zinc-900 w-full overflow-x-hidden">
        <BrowserRouter>          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
            
        </BrowserRouter>
      </div>

  );
}

export default App;
