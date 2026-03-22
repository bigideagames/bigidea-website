import { useEffect } from "react";

export default function PlayHockeyPage() {
  useEffect(() => {
    // Hide any scrollbars for the fullscreen iframe experience
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <iframe
      src="https://superstar-hockey.b-cdn.net/webgl/index.html"
      title="Superstar Hockey"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
      allowFullScreen
      allow="autoplay; gamepad"
    />
  );
}
