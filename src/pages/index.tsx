import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineBell, AiOutlineEdit } from "react-icons/ai";

const HomePage = () => {
  return (
    <div className="h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px]  border-gray-300 bg-white">
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
        <main className="col-span-8 h-full w-full border-r border-gray-300  bg-red-300 ">
          content
        </main>
        <aside className="col-span-4 h-full w-full bg-blue-300">sidebar</aside>
      </section>
    </div>
  );
};

export default HomePage;
