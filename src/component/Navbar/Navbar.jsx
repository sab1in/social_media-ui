const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-blue-400 grid grid-cols-3 justify-between px-10 items-center">
      <div className="">
        <div className="w-full text-white text-2xl font-semibold">social</div>
      </div>
      <div className="w-full">
        <input
          className="rounded-lg w-full text-lg px-2"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="text-white flex justify-end">profile</div>
    </nav>
  );
};

export default Navbar;
