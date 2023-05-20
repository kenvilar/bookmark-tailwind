import Image from "next/image";
import FooterLogo from "@/app/images/logo-bookmark-footer.svg";
import FacebookIcon from "@/app/images/icon-facebook.svg";
import TwitterIcon from "@/app/images/icon-twitter.svg";

const Footer = () => {
  const menuItems = ["Features", "Download", "FAQ"];
  const socialItems = [FacebookIcon, TwitterIcon];

  return (
    <>
      <footer className="py-16 bg-veryDarkBlue">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <Image src={FooterLogo} alt="footer-logo" className="mb-1" />

            {menuItems.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="uppercase hover:text-softRed"
                >
                  {item}
                </a>
              );
            })}
          </div>

          <div className="flex space-x-10">
            {socialItems.map((item, idx) => {
              return (
                <Image
                  key={idx}
                  src={item}
                  alt="icon"
                  className="h-6 ficon cursor-pointer"
                />
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
