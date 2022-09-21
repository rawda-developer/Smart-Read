import { Routes, Route } from "react-router-dom";
import NotFound from "./core/NotFound";
import Home from "./core/Home";
import Register from "./user/Register";
import Login from "./auth/Login";
import Users from "./user/Users";
import Profile from "./user/Profile";
import DeleteUser from "./user/DeleteUser";
import EditProfile from "./user/EditProfile";
import NavBar from "./core/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/users/all" element={<Users />} exact />
        <Route path="/users/:id/profile" element={<Profile />} exact />
        <Route path="/users/:id/delete" element={<DeleteUser />} exact />
        <Route path="/users/:id/edit" element={<EditProfile />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
