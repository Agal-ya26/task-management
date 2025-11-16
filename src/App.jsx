import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Task Management App</h1>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> | <Link to="/create">Create Task</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
}