import React from "react";
import { motion } from "framer-motion";
import ListItem from "./ListItem";

const Home = ({ data }) => {
  const listVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: "backInOut",
      },
    },
  };

  return (
    <main className="">
      <div className="max-w-[min(1100px,90%)] mx-auto py-16 flex flex-col items-center gap-6 lg:py-12 lg:gap-12">
        <h2 className="text-xl tracking-wider font-medium lg:text-3xl">
          Challenge greydive
        </h2>
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="bg-[#3d425033] p-10 rounded-xl border border-zinc-700/80 shadow-md shadow-zinc-600/10 hover:border-zinc-400 lg:p-14"
        >
          <ul className="flex flex-col items-center gap-4 lg:gap-6">
            {data.map((item) => (
              <ListItem item={item} key={item.id} />
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
