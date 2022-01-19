import {Route, Routes} from "react-router-dom";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Footer from "./Footer/Footer";
import UserCard from "./UserCard/UserCard";
import Repositories from "./Repositories/Repositories";

function App() {
  return (
    <div>
      <main className="flex-grow min-h-screen bg-cyan-500">
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/users/:name" element={<UserCard/>}/>
          <Route path="/users/:name/repositories/:repo" element={<Repositories/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
