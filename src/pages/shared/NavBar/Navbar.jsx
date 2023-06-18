/** @format */

const Navbar = () => {
  return (
    <div className="navbar justify-between bg-base-100 max-w-7xl mx-auto p-5">
      <div className="flex flex-col">
        <a className="normal-case text-xl">Department of Economics</a>
        <p>Chuadanga Govt. College</p>
      </div>
      <div>
        <button className="btn btn-ghost">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
