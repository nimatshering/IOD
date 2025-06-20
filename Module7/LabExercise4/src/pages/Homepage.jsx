import { useContext } from "react";
import { MyThemeContext } from "../context/MyThemeContext";

export default function Homepage() {
  const { theme, darkMode } = useContext(MyThemeContext);
  return (
    // then use the theme object for inline styling

    <div className="Homepage">
      <div
        className="LoginForm componentBox"
        style={{ background: theme.background, color: theme.foreground }}
      >
        <h1>Home</h1>
      </div>
    </div>
  );
}

// ++ Update imports in AppRoutes.jsx to include these new files
