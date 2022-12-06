import "./App.css";
import { Layout } from "./components/Layout";
import { AddBookForm } from "./components/AddBookForm";
import { BookPage } from "./components/BookPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "link")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "link")}
              to="/add-book"
            >
              Add book
            </NavLink>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/add-book" element={<AddBookForm />} />
          <Route path=":id" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
