import Image from "next/image";
import Logo from "@/app/images/logo-bookmark.svg";

const Header = () => {
  const menuItems = ["Features", "Download", "FAQ"];

  return (
    <>
      <nav className="container relative mx-auto p-6">
        <div className="flex items-center justify-between space-x-20 my-6">
          <div className="z-30">
            <Image src={Logo} alt="logo" id="logo" className="" />
          </div>

          {/*menu items*/}
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            {menuItems.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="tracking-widest hover:text-softRed"
                >
                  {item}
                </a>
              );
            })}

            <a
              href="#"
              className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
