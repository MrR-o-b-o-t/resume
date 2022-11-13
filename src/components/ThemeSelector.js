import { useTheme } from "../hooks/useTheme";
import "./ThemeSelector.css";
import modeIcon from "../assets/mode.svg";

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme();

  const toggle = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);

  return (
    <div className="mode-toggle">
      <img
        src={modeIcon}
        onClick={toggle}
        alt="Theme selector button"
        style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
      />
    </div>
  );
}
