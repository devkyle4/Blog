import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./Pages/homepage";
import LoginPage from "./Pages/loginpage";
import SignUp from "./Pages/signup";
import PostBody from "./Pages/postbody"
import { UserContextProvider } from "./userContext";
import CreatePost from "./Pages/createpost";
import EditPost from "./Pages/editpost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostBody />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
