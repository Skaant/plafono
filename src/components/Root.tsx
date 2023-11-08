import React, { useState } from "react";
import { CUISINE_DATA } from "../data/cuisine.data";
import { Piece } from "../types/Piece";
import LongueursTable from "./LongueursTable";
import GlobalVariables from "./VariablesGlobales";

export default function Root() {
  const [piece, setPiece] = useState<Piece>(CUISINE_DATA);
  return (
    <div>
      <h1>Plafono</h1>
      <p>Calculateur de l'extrême</p>
      <GlobalVariables piece={piece} setPiece={setPiece} />
      <LongueursTable piece={piece} setPiece={setPiece} />
    </div>
  );
}
