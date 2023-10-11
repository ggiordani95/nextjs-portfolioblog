import React from "react";
import { tecnologies } from "./utils";
import Image from "next/image";
import { TTech } from "./types";

function TechStack() {
  return (
    <div className="flex flex-row mt-16">
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="italic font-bold text-xl">2.</p>
        <p className="pr-2 w-full">
          Minha stack{" "}
          <i>
            <b>favorita</b>
          </i>{" "}
          :{""}
        </p>
      </div>
      <div className="columns-3 max-w-xl ml-6">
        {tecnologies.map((tecnology: TTech) => {
          return (
            <Image
              key={tecnology.name}
              src={tecnology.image}
              alt={tecnology.alt}
              style={{ width: "auto", height: "70px" }}
              priority
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
