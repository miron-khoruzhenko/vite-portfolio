import { BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from "./components/common/1-navbar/Navbar.tsx";
import Footer from "./components/common/2-footer/Footer.tsx"

import Home from "./components/pages/Home/Home.tsx";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound.tsx";

function App() {

  return (
    <div className="dark:bg-zinc-900 dark:text-zinc-300 text-zinc-900 w-screen overflow-x-hidden">
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<PageNotFound/>} />

            </Routes>
            
          <Footer/>
        </BrowserRouter>
      </div>

  );
}

export default App;

// >
//     {
//       isReady ? 
//       (<div className="dark:bg-zinc-900 dark:text-zinc-300 text-zinc-900">
//         <BrowserRouter>
//           <Navbar/>
//             <Routes>
//               <Route path="/" element={<Home/>} />
//               <Route path="*" element={<PageNotFound/>} />

//             </Routes>
          
//           <Footer/>
//         </BrowserRouter>
//       </div>) : (<Loader bg={'bg-white'}/>)
//     }
//     </>