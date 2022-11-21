import React from "react";
import ListItem from "./ListItem";

const Home = ({ data }) => {
  return (
    <main className="">
      <div className="max-w-[min(1100px,90%)] mx-auto py-16 flex flex-col items-center gap-6 lg:py-12 lg:gap-12">
        <h2 className="text-xl tracking-wider font-medium lg:text-3xl">
          Challenge greydive
        </h2>
        <div className="bg-[#3d425033] p-10 rounded-xl border border-zinc-700/80 shadow-md shadow-zinc-600/10 hover:border-zinc-400 lg:p-14">
          <ul className="flex flex-col items-center gap-4 lg:gap-6">
            {data.map((item) => (
              <ListItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
