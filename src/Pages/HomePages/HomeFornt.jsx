function HomeFornt() {
  return (
    <div className="w-full relative h-[90vh] sm:h-screen homePage outlet flex flex-col justify-center items-center">
      <div className=" text-center  w-[80%] md:w-[60%] lg:w-[50%] space-y-1 pb-20 lg:pb-36">
        <p className="text-xl text-heading font-semibold">Welcome To LitEra </p>
        <p className=" text-6xl lg:text-7xl font-bold ">
          Where Every Story Finds A Home
        </p>
      </div>
      <img
        src="/img1.jpg"
        alt="image"
        className="hidden md:block w-[14vw] lg:w-[11vw]  absolute bottom-0 transition-all  "
      />
      <img
        src="/img2.jpg"
        alt="image"
        className="hidden md:block w-[14vw] lg:w-[11vw] absolute bottom-24  left-24 lg:left-44 lg:bottom-16 transition-all"
      />

      <img
        src="/img4.jpg"
        alt="image"
        className="hidden md:block w-[14vw] lg:w-[11vw] absolute bottom-24 right-24 lg:right-44 lg:bottom-20 transition-all"
      />
      <img
        src="/img3.jpg"
        alt="image"
        className="hidden lg:block w-[15vw] lg:w-[12vw] absolute top-[12rem]  left-0 transition-all"
      />
      <img
        src="/img5.jpg"
        alt="image"
        className="hidden lg:block w-[15vw] lg:w-[12vw] absolute top-[12rem] right-0 transition-all"
      />
    </div>
  );
}

export default HomeFornt;
