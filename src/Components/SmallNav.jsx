import { useNavigate } from "react-router-dom";
import SmallNavLinks from "./SmallNavLinks";
import { IoClose } from "react-icons/io5";
import Proptype from "prop-types";
import { useEffect } from "react";

//Prop validation
SmallNav.propTypes = {
  setOpen: Proptype.func,
};

function SmallNav({ setOpen }) {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function handleClick(str) {
    setOpen((open) => !open);
    navigate(str);
  }

  return (
    <div className="w-full h-screen bg-black/50 absolute top-0 left-0">
      <div className="w-[60%] h-full bg-slate-950 text-slate-100 relative pt-2">
        <button
          className="absolute right-2 text-2xl hover:text-heading cursor-pointer"
          onClick={() => setOpen((open) => !open)}
        >
          <IoClose />
        </button>
        <img
          src="./logo.png"
          alt="website Logo"
          className="w-[40vw] mx-auto pt-14"
        />
        <div className="pt-16 px-1  flex flex-col items-center divide-y-2 divide-slate-700/50">
          <SmallNavLinks onclick={() => handleClick("/")} name="Home" />
          <SmallNavLinks
            onclick={() => handleClick("/collection")}
            name="Collection"
          />
          <SmallNavLinks onclick={() => handleClick("/add")} name="Add Book" />
        </div>
      </div>
    </div>
  );
}

export default SmallNav;
