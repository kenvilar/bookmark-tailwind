"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Tab1 from "@/app/images/illustration-features-tab-1.svg";
import Tab2 from "@/app/images/illustration-features-tab-2.svg";
import Tab3 from "@/app/images/illustration-features-tab-3.svg";

const FeatureTabs = () => {
  const tabsRef: any = useRef(null);
  const panelsRef: any = useRef(null);

  useEffect(() => {
    tabsMenuEventListener();
  }, []);

  const tabsMenuEventListener = () => {
    let _tabs = tabsRef.current?.querySelectorAll(".tab");
    _tabs.forEach((tab: any) => tab.addEventListener("click", onTabClick));
  };

  const onTabClick = (e: any) => {
    let _tabs = tabsRef.current?.querySelectorAll(".tab");
    let _panels = panelsRef.current?.querySelectorAll(".panel");
    // deactivate all tabs
    _tabs.forEach((tab: any) => {
      tab.children[0].classList.remove(
        "border-softRed",
        "border-b-4",
        "md:border-b-0"
      );
    });

    // hide all panels
    _panels.forEach((panel: any) => {
      panel.classList.add("hidden");
    });

    // activate a new tab and panel based on the target
    e.target.classList.add("border-softRed", "border-b-4");
    const classString = e.target.getAttribute("data-target");
    panelsRef.current
      ?.getElementsByClassName(classString)[0]
      .classList.remove("hidden");
  };

  return (
    <>
      <section id="tabs" ref={tabsRef} className="">
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="lg:w-[2000px] lg:h-[300px] lg:right-[60%] lg:absolute lg:rounded-r-full lg:top-60 lg:bg-softBlue" />
          {/*tabs container*/}
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            {/*Tab 1*/}
            <div
              className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-1"
            >
              <div
                className="py-5 border-b-4 border-softRed"
                data-target="panel-1"
              >
                Simple Bookmarking
              </div>
            </div>

            {/*Tab 2*/}
            <div
              className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-2"
            >
              <div className="py-5" data-target="panel-2">
                Speedy Searching
              </div>
            </div>

            {/*Tab 3*/}
            <div
              className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-3"
            >
              <div className="py-5" data-target="panel-3">
                Easy Sharing
              </div>
            </div>
          </div>

          {/*Tab Panels*/}
          <div id="panels" ref={panelsRef} className="container mx-auto">
            {/*Panel 1*/}
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
              {/*Panel Image*/}
              <div className="flex justify-center md:w-1/2">
                <Image src={Tab1} alt="tab1" className="relative z-10" />
              </div>
              {/*Panel Content*/}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>

            {/*Panel 2*/}
            <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2">
              {/*Panel Image*/}
              <div className="flex justify-center md:w-1/2">
                <Image src={Tab2} alt="tab2" className="relative z-10" />
              </div>
              {/*Panel Content*/}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>

            {/*Panel 3*/}
            <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3">
              {/*Panel Image*/}
              <div className="flex justify-center md:w-1/2">
                <Image src={Tab3} alt="tab3" className="relative z-10" />
              </div>
              {/*Panel Content*/}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others.
                  Create a shareable a link that you can send at the click of a
                  button.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureTabs;
