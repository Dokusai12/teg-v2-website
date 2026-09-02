import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { publicUrl } from "./lib/publicUrl";

function installFavicons() {
  document.querySelectorAll("link[data-tego-favicon]").forEach((n) => n.remove());

  const add = (file: string, media?: string) => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = publicUrl(file);
    link.setAttribute("data-tego-favicon", "");
    if (media) link.media = media;
    document.head.appendChild(link);
  };

  add("favicon-light-scheme.png", "(prefers-color-scheme: light)");
  add("favicon-dark-scheme.png", "(prefers-color-scheme: dark)");
  add("favicon-light-scheme.png");
}

installFavicons();

createRoot(document.getElementById("root")!).render(<App />);
