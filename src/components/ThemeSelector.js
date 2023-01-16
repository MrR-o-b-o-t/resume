import { useTheme } from "../hooks/useTheme";
import "./ThemeSelector.css";
import modeIcon from "../assets/mode.svg";

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme();

  const toggle = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`mode-toggle`}
      onClick={toggle}
      style={{ filter: mode === "dark" ? "invert(86%)" : "invert(0%)" }}
    >
      <img
        src={modeIcon}
        alt="Theme selector button"
        style={{ filter: mode === "dark" ? "invert(0%)" : "invert(20%)" }}
      />
      <p
        style={{
          paddingTop: "17px",
          fontWeight: "bold",
          filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
        }}
      >
        Dark/Light Mode
      </p>
    </div>
  );
}
