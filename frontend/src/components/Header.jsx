import { useState } from "react";
import DesktopNav from "./DesktopNav";
import logo from "../assets/logo.svg";
import MobileNav from "./MobileNav";

export default function Header() {
  const [hideleft, sethideLeft] = useState("-left-[1000px]");
  const navItems = ["recipes", "resources", "about", "contact"];

  const onOpen = () => {
    sethideLeft("left-0");
  };

  const onClose = () => {
    sethideLeft("-left-[1000px]");
  };

  return (
    <>
      <div className="max-[900px]:hidden mb-1">
        {" "}
        {/* Adjusted margin-bottom to mb-1 */}
        <DesktopNav navItems={navItems} logo={logo} />
      </div>
      <div className="min-[900px]:hidden mb-1">
        {" "}
        {/* Adjusted margin-bottom to mb-1 */}
        <MobileNav
          navItems={navItems}
          logo={logo}
          onClose={onClose}
          hideleft={hideleft}
          onOpen={onOpen}
        />
      </div>
    </>
  );
}
