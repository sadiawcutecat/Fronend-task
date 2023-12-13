import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      
            <div className="navbar bg-base-100">
                <div className="flex">
                    <a className="btn btn-ghost normal-case text-xl">Hacker News</a>
                </div>
                <div className=" gap-2 mx-auto">
                    <div className="form-control flex-row space-x-4 ">
                        <input type="text" placeholder="Search" className="input input-bordered w-[800px]"  />
                       <Link> <IoSearch className="h-8 w-8 mt-2" /> </Link>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ms-48">
                            <div className="w-10 rounded-full ">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
       
    );
};

export default Navbar;