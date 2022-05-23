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

        {/* // More Routes are yet to be added */}
        <Route path="/" element={ <Users/> } />
        <Route path="/places/new" element={<NewPost/>}/>

        {/* If no route matched the it will be redirected to the home route */}
        {/* Note: react-router-dom @v6 is used in this prooject */}
        <Route path="*" element={ <Navigate to="/" replace />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
