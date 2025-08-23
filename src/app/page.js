import Image from "next/image";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Home() {
  return /*#__PURE__*/_jsxs("div", {
    className: "font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20",
    children: [/*#__PURE__*/_jsxs("main", {
      className: "flex flex-col gap-[32px] row-start-2 items-center sm:items-start",
      children: [/*#__PURE__*/_jsx(Image, {
        className: "dark:invert",
        src: "/next.svg",
        alt: "Next.js logo",
        width: 180,
        height: 38,
        priority: true
      }), /*#__PURE__*/_jsxs("ol", {
        className: "font-mono list-inside list-decimal text-sm/6 text-center sm:text-left",
        children: [/*#__PURE__*/_jsxs("li", {
          className: "mb-2 tracking-[-.01em]",
          children: ["Get started by editing", " ", /*#__PURE__*/_jsx("code", {
            className: "bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded",
            children: "src/app/page.tsx"
          }), "."]
        }), /*#__PURE__*/_jsx("li", {
          className: "tracking-[-.01em]",
          children: "Save and see your changes instantly."
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex gap-4 items-center flex-col sm:flex-row",
        children: [/*#__PURE__*/_jsxs("a", {
          className: "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto",
          href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/_jsx(Image, {
            className: "dark:invert",
            src: "/vercel.svg",
            alt: "Vercel logomark",
            width: 20,
            height: 20
          }), "Deploy now"]
        }), /*#__PURE__*/_jsx("a", {
          className: "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]",
          href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Read our docs"
        })]
      })]
    }), /*#__PURE__*/_jsxs("footer", {
      className: "row-start-3 flex gap-[24px] flex-wrap items-center justify-center",
      children: [/*#__PURE__*/_jsxs("a", {
        className: "flex items-center gap-2 hover:underline hover:underline-offset-4",
        href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/*#__PURE__*/_jsx(Image, {
          "aria-hidden": true,
          src: "/file.svg",
          alt: "File icon",
          width: 16,
          height: 16
        }), "Learn"]
      }), /*#__PURE__*/_jsxs("a", {
        className: "flex items-center gap-2 hover:underline hover:underline-offset-4",
        href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/*#__PURE__*/_jsx(Image, {
          "aria-hidden": true,
          src: "/window.svg",
          alt: "Window icon",
          width: 16,
          height: 16
        }), "Examples"]
      }), /*#__PURE__*/_jsxs("a", {
        className: "flex items-center gap-2 hover:underline hover:underline-offset-4",
        href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/*#__PURE__*/_jsx(Image, {
          "aria-hidden": true,
          src: "/globe.svg",
          alt: "Globe icon",
          width: 16,
          height: 16
        }), "Go to nextjs.org \u2192"]
      })]
    })]
  });
}