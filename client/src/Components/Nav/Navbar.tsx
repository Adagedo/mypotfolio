import { useState } from "react";
import MobileSideNav from "./MobileSideNav";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <>
      <PrimaryNav />
      <SecondaryNav setIsNavOpen={setIsNavOpen} />
      <MobileSideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
}

export default Navbar;
