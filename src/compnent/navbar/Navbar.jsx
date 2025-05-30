import React from "react";
import { useThemeContext } from "../../hooks/themeContext/Context";

const Navbar = () => {
  const {
    appBG,
    fontPrimary,
    switchToDark,
    switchToLight,
    switchToBlueGray,
    switchToLavender,
    switchToWarmSunset,
    switchToMintGreen,
  } = useThemeContext();

  return (
    <nav
      className="p-4 border-b-[1px] border-black/20"
      style={{ backgroundColor: appBG }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="font-bold text-xl" style={{ color: fontPrimary }}>
          <a href="/">Theme Changer App </a>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={switchToLight}
            className="px-3 py-1 rounded bg-gray-200 text-black text-sm shadow"
          >
            Light
          </button>
          <button
            onClick={switchToDark}
            className="px-3 py-1 rounded bg-black text-white text-sm shadow"
          >
            Dark
          </button>
          <button
            onClick={switchToLavender}
            className="px-3 py-1 rounded bg-[#bc7bd1] text-white text-sm shadow"
          >
            Lavender
          </button>
          <button
            onClick={switchToBlueGray}
            className="px-3 py-1 rounded bg-[#37474F] text-white text-sm shadow"
          >
            Blue Gray
          </button>
          <button
            onClick={switchToMintGreen}
            className="px-3 py-1 rounded bg-[#A8E6CF] text-[#004D40] text-sm shadow"
          >
            Mint Green
          </button>
          <button
            onClick={switchToWarmSunset}
            className="px-3 py-1 rounded bg-[#FF8A65] text-[#3E2723] text-sm shadow"
          >
            Warm Sunset
          </button>
        </div>

        <ul className="flex space-x-4 max-[600px]:hidden">
          <li>
            <a href="/" style={{ color: fontPrimary }}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" style={{ color: fontPrimary }}>
              About
            </a>
          </li>
          <li>
            <a href="/services" style={{ color: fontPrimary }}>
              Services
            </a>
          </li>
          <li>
            <a href="/contact" style={{ color: fontPrimary }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

