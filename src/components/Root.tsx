import React, { useMemo, useState } from "react";
import { CLOUS_DATA } from "../data/clous.data";
import { CUISINE_DATA } from "../data/cuisine.data";
import { LAINES_BOIS_DATA } from "../data/laines-bois.data";
import { PLAQUES_OSB_DATA } from "../data/plaques-osb.data";
import { VIS_DATA } from "../data/vis.data";
import { Piece } from "../types/Piece";
import { UIState } from "../types/ui/UIState";
import LongueursTable from "./LongueursTable";
import GlobalVariables from "./VariablesGlobales";
import { TASSEAUX_DATA } from "../data/tasseaux.data";
import RootSection from "./RootSection";
import LongueursTableUIState from "./LongueursTableUIState";

export default function Root() {
  const [piece, setPiece] = useState<Piece>(CUISINE_DATA);
  const [uIState, setUIState] = useState<UIState>({
    lainesBois: true,
    lainesBoisChutes: false,
    plaquesOsb: true,
    plaquesOsbChutes: false,
    tasseaux: true,
    visEtClous: true,
  });
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
  const tasseau = useMemo(
    () => TASSEAUX_DATA[piece.tasseauIndex],
    [piece.tasseauIndex]
  );
  return (
    <div>
      <h1>Plafono, mission : {piece.nom}</h1>
      <p>🐱‍👤 Le calculateur extrême de travaux 🔨</p>
      <RootSection>
        <>
          <h2>Les interpoutres</h2>
          <LongueursTableUIState uiState={uIState} setUiState={setUIState} />
          <GlobalVariables
            piece={piece}
            setPiece={setPiece}
            laineBois={laineBois}
            plaqueOsb={plaqueOsb}
            tasseau={tasseau}
            vis={vis}
            clou={clou}
            uIState={uIState}
            setUIState={setUIState}
          />
          <LongueursTable
            piece={piece}
            laineBois={laineBois}
            plaqueOsb={plaqueOsb}
            tasseau={tasseau}
            vis={vis}
            clou={clou}
            longueursTableUi={uIState}
            setLongueursTableUi={setUIState}
          />
        </>
      </RootSection>
      <RootSection>
        <>
          <h2>La laine de bois</h2>
        </>
      </RootSection>
      <RootSection>
        <>
          <h2>Les plaques OSB</h2>
        </>
      </RootSection>
    </div>
  );
}
