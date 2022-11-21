import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item, index }) => {
  return (
    <li className="flex items-center justify-center">
      <Link
        to={`/test/${item.cliente}`}
        className="text-zinc-100 font-mono p-2 rounded-md border border-teal-500/80 bg-teal-900/20 shadow-md shadow-teal-700/20 transition ease-in duration-100 hover:-translate-y-1 hover:border-teal-500 hover:text-white"
      >
        Testeador {item.id}
      </Link>
    </li>
  );
};

export default ListItem;
