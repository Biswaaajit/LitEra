import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import SmallNav from "./SmallNav";
import NavigationLinks from "./NavigationLinks";

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute w-full flex  items-center justify-between  px-4 py-3 lg:px-8 shadow-lg z-30 navigate">
      <img
        src="/logo.png"
        alt="website logo"
        className="w-[30vw] sm:w-[25vw] md:w-[12rem] lg:w-[15rem]"
      />
      <div
        className="block md:hidden cursor-pointer text-2xl"
        onClick={() => setOpen(true)}
      >
        <TiThMenu />
      </div>
      <div className="hidden md:block space-x-7">
        <NavigationLinks address="/" name="Home" />
        <NavigationLinks address="/collection" name="Collection" />
        <NavigationLinks address="/add" name="Add Book" />
      </div>
      {open && <SmallNav setOpen={setOpen} />}
    </div>
  );
}

export default Navigation;
