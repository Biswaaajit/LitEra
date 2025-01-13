import Proptype from "prop-types";

function Heading({ name, width }) {
  return (
    <div className=" w-fit mx-auto">
      <p className="px-6 text-[6vw] sm:text-[5vw] md:text-[4vw] xl:text-[3vw]">
        {name}
      </p>
      <div className="w-full h-1.5 rounded-2xl bg-slate-700/20">
        <p
          className=" h-1.5 rounded-2xl bg-heading mx-auto"
          style={{ width: width }}
        ></p>
      </div>
    </div>
  );
}

//Prop Validation
Heading.propTypes = {
  name: Proptype.string.isRequired,
  width: Proptype.string,
};

export default Heading;
