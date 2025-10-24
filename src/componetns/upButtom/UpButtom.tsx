import { ArrowUp } from "lucide-react";
import "./UpButtom.css";

export default function UpButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={handleClick} className="up-button" aria-label="Ir arriba">
      <ArrowUp size={16} color="white" />
    </button>
  );
}
