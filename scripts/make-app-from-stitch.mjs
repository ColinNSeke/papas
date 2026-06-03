import { readFileSync, writeFileSync } from "node:fs";

const sourcePath = new URL("../public/source/code.html", import.meta.url);
const outputPath = new URL("../src/App.tsx", import.meta.url);

const html = readFileSync(sourcePath, "utf8");
const body = html.match(/<body[^>]*>([\s\S]*?)<script>/)?.[1];

if (!body) {
  throw new Error("Could not find the Stitch body markup.");
}

let jsx = body
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/\bclass=/g, "className=")
  .replace(/style="transition-delay:\s*([0-9]+)px;"/g, 'style={{ transitionDelay: "$1px" }}')
  .trim();

const component = `import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const nav = document.getElementById("main-nav");
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add(
            "bg-[#0a0a0a]/95",
            "backdrop-blur-md",
            "border-b",
            "border-white/5",
          );
        } else {
          nav.classList.remove(
            "bg-[#0a0a0a]/95",
            "backdrop-blur-md",
            "border-b",
            "border-white/5",
          );
        }
      }

      const heroBg = document.getElementById("hero-bg");
      if (heroBg instanceof HTMLElement) {
        heroBg.style.transform = \`translateY(\${window.pageYOffset * 0.4}px)\`;
      }
    };

    const buttons = document.querySelectorAll("button");
    const buttonCleanups: Array<() => void> = [];

    buttons.forEach((btn) => {
      const handleMouseDown = () => {
        btn.style.transform = "scale(0.95)";
      };
      const handleMouseUp = () => {
        btn.style.transform = "scale(1)";
      };

      btn.addEventListener("mousedown", handleMouseDown);
      btn.addEventListener("mouseup", handleMouseUp);
      buttonCleanups.push(() => {
        btn.removeEventListener("mousedown", handleMouseDown);
        btn.removeEventListener("mouseup", handleMouseUp);
      });
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      revealEls.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      buttonCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
${jsx
  .split("\n")
  .map((line) => `      ${line}`)
  .join("\n")}
    </>
  );
}
`;

writeFileSync(outputPath, component);
