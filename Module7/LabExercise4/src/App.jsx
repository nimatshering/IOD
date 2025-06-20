import "./App.css";
import { UserProvider } from "./context/UserContext";
import NavBar from "./components/NavBar";
import { EmojiProvider } from "./context/EmojiContext";
import MyThemeProvider from "./context/MyThemeContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <UserProvider>
        <EmojiProvider>
          <MyThemeProvider>
            <NavBar></NavBar>
            <AppRoutes />
          </MyThemeProvider>
        </EmojiProvider>
      </UserProvider>
    </>
  );
}

export default App;
