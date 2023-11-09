import React, { useMemo, useState } from "react";
import { CLOUS_DATA } from "../data/clous.data";
import { CUISINE_DATA } from "../data/cuisine.data";
import { LAINES_BOIS_DATA } from "../data/laines-bois.data";
import { PLAQUES_OSB_DATA } from "../data/plaques-osb.data";
import { VIS_DATA } from "../data/vis.data";
import { Piece } from "../types/Piece";
import LongueursTable from "./LongueursTable";
import GlobalVariables from "./VariablesGlobales";

export default function Root() {
  const [piece, setPiece] = useState<Piece>(CUISINE_DATA);
  const laineBois = useMemo(
    () => LAINES_BOIS_DATA[piece.laineBoisIndex],
    [piece.laineBoisIndex]
  );
  const plaqueOsb = useMemo(
    () => PLAQUES_OSB_DATA[piece.plaqueOsbIndex],
    [piece.plaqueOsbIndex]
  );
  const vis = useMemo(() => VIS_DATA[piece.visIndex], [piece.visIndex]);
  const clou = useMemo(() => CLOUS_DATA[piece.clouIndex], [piece.clouIndex]);
  return (
    <div>
      <h1>Plafono</h1>
      <p>Calculateur de l'extrême</p>
      <GlobalVariables
        piece={piece}
        setPiece={setPiece}
        laineBois={laineBois}
        plaqueOsb={plaqueOsb}
        vis={vis}
        clou={clou}
      />
      <LongueursTable
        piece={piece}
        laineBois={laineBois}
        plaqueOsb={plaqueOsb}
      />
    </div>
  );
}
