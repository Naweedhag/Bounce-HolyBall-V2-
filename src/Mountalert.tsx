import { useState, useEffect } from "react";
type Position = {
  x: number;
  y: number;
};
export default function Alert() {
  const [bouncePosition, setBouncePosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case "ArrowDown": {
          setBouncePosition((prev) => {
            return {
              x: prev.x,
              y: prev.y + 10,
            };
          });
          break;
        }
        case "ArrowUp": {
          setBouncePosition((prev) => {
            return {
              x: prev.x,
              y: prev.y - 10,
            };
          });
          break;
        }

        case "ArrowRight": {
          setBouncePosition((prev) => {
            return {
              x: prev.x + 10,
              y: prev.y,
            };
          });
          break;
        }
        case "ArrowLeft": {
          setBouncePosition((prev) => {
            return {
              x: prev.x - 10,
              y: prev.y,
            };
          });
          break;
        }
        default:
      }
      //   alert(`Key pressed: ${event.key}`);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translate(${bouncePosition.x}px,${bouncePosition.y}px)`,
        color: "red",
        border: "solid 1px",
        height: "50px",
        width: "50px",
      }}
    ></div>
  );
}
