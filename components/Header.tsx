import { MdOutlineManageSearch } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full flex justify-end md:justify-center items-center py-4">
      <MdOutlineManageSearch className="w-7 h-7 lg:h-9 lg:w-9" />
    </div>
  );
};

export default Header;
