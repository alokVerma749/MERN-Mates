import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import Users from "./Users/pages/Users"
import NewPost from "./Blogs/pages/NewPost"
import MainNavigation from "./shared/components/Navigation/MainNavigation"

function App() {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
        <Route path="/" element={ <Users/> } />
        <Route path="/places/new" element={<NewPost/>}/>
        <Route path="*" element={ <Navigate to="/" replace />} 
        />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
