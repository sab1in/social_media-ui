const Navbar = () => {
  return (
    <nav className="w-full h-12 fixed top-0 left-0 right-0 z-20 bg-blue-400 grid grid-cols-3 justify-between px-2 sm:px-10 items-center">
      <div className="">
        <div className="w-full text-white text-2xl font-semibold">Social</div>
      </div>
      <div className="w-full flex justify-start">
        <input
          className="rounded-full w-full text-lg px-4"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="text-white flex justify-end">profile</div>
    </nav>
  );
};

export default Navbar;
