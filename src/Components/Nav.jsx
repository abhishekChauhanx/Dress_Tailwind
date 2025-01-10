import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Nav = () => {
  return (
    <div>
        <nav className="flex items-center justify-around pt-8 mb-20">
        <div className="text-3xl font-bold logo">Zoker</div>
        <div className="flex space-x-16 text-2xl cursor-pointer icons">
          <span>
            <IoMdSearch />
          </span>
          <span>
            <FaRegUser />
          </span>
          <span>
            <FaCartShopping />
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Nav
