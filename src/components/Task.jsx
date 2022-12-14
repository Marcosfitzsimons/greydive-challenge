import React from "react";
import { motion } from "framer-motion";

const taskVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: "backInOut",
    },
  },
};

const Task = ({ pregunta, index }) => {
  return (
    <motion.article
      variants={taskVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-3 bg-[#3d425033] rounded-xl border border-zinc-700/80 shadow-md shadow-zinc-600/10 p-4 hover:border-zinc-400"
    >
      <div className="">
        <h4 className="text-lg font-medium">Tarea {index + 1}:</h4>
        <p className="text-zinc-300">
          {pregunta.texto.split("\\n").map((line, index) => (
            <span key={index}>
              {line} <br />
            </span>
          ))}
        </p>
      </div>
      <div className="">
        {pregunta.tipoTarea === "opinionScale5" && (
          <p className="font-medium">
            Respuesta: <span className="font-normal">{pregunta.respuesta}</span>
          </p>
        )}
        <p className="font-medium">
          Duración de la tarea:{" "}
          <span className="font-normal">{pregunta.tiempo}</span>
        </p>
      </div>
    </motion.article>
  );
};

export default Task;
