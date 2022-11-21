import React from "react";
import { useParams } from "react-router-dom";
import Task from "./Task";

const Test = ({ data }) => {
  const { id } = useParams();
  const test = data.find((el) => el.cliente === id);

  const newTranscription = test.transcripcion.split("<br>");

  return (
    test && (
      <section>
        <div className="max-w-[min(1100px,90%)] mx-auto py-6 flex flex-col items-center gap-3 text-zinc-100 lg:py-12 lg:gap-6 lg:items-start">
          <h3 className="relative w-full text-center text-2xl font-semibold capitalize tracking-wider lg:text-5xl lg:text-start lg:pb-4">
            {test.cliente}
            <span className="absolute left-0 -bottom-5 h-4 w-full border-b border-teal-500 shadow-lg shadow-teal-700/40"></span>
          </h3>
          <div className="pt-6">
            <p className="text-lg lg:text-2xl">
              <span className="font-medium">Test:</span> Test de usabilidad en
              el sitio web
            </p>
            <p className="text-lg lg:text-2xl">
              <span className="font-medium">Tiempo: </span>
              {test.timeTest} minutos
            </p>
          </div>
          <p className="text-lg font-medium lg:text-2xl">Testeador {test.id}</p>
          <div className="">
            <video
              src={test.linkVideo}
              className="lg:h-[500px]"
              controls
              muted
            ></video>
          </div>
          <div className="w-full">
            <p className="my-5 relative text-2xl font-semibold lg:text-3xl lg:my-6">
              Transcripción:
              <span className="absolute left-0 -bottom-5 h-4 w-full border-b border-teal-500 shadow-lg shadow-teal-700/40"></span>
            </p>
            <div className="p-3 rounded-lg bg-zinc-800 mt-10 shadow-lg shadow-zinc-500/10 border border-zinc-500/80 lg:w-1/2 lg:mt-11">
              <div className="overflow-scroll h-80 ">
                <p>
                  {newTranscription.map((line, index) => (
                    <span key={index}>
                      {line} <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="relative py-5 text-2xl font-semibold lg:text-3xl lg:py-6">
              Tareas
              <span className="absolute left-0 bottom-0 h-4 w-full border-b border-teal-500 shadow-lg shadow-teal-700/40"></span>
            </p>
            <p className="py-5 font-medium lg:py-6 lg:text-lg">
              Escenario:{" "}
              <span className="font-normal text-base text-zinc-100">
                {test.escenario}
              </span>
            </p>
            <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
              {test.preguntas.map((pregunta, index) => (
                <Task key={index} pregunta={pregunta} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Test;
// .replace(/\<br\>/g, " ")
