import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineBell, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";

const HomePage = () => {
  return (
    <div className="h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">Blog App</div>
        <div className=" flex items-center space-x-4">
          <div>
            <AiOutlineBell className="text-2xl  text-gray-600" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <div>
            <button className="flex items-center space-x-2 rounded border border-gray-300  px-4 py-2 transition hover:border-gray-900 hover:text-gray-900">
              <div>Write</div>
              <div>
                <AiOutlineEdit />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r border-gray-300  ">
          <div className="flex flex-col space-y-4  p-10">
            <div className="flex items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-full border border-gray-300"
              >
                <div className="absolute left-2 flex h-full  items-center">
                  <AiOutlineSearch />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className=" w-full rounded-full px-4  py-1 pl-7 outline-none placeholder:text-sm placeholder:text-gray-300"
                  placeholder="Seacrch..."
                />
              </label>
              <div className="flex w-full items-center justify-end space-x-4">
                <div>My topics:</div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, id) => (
                    <div key={id} className="rounded-3xl bg-gray-200/50 p-2">
                      tag {id}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between  border-b border-gray-300 pb-8">
              <div>Articles</div>
              <div>
                <button className="flex items-center   space-x-2 rounded-full border border-gray-300 px-4 py-1.5 font-semibold">
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="text-xl " />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </main>
        <aside className="col-span-4 h-full w-full bg-blue-300">sidebar</aside>
      </section>
    </div>
  );
};

export default HomePage;
