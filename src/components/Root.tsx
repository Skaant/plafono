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
import { getLongueurSections } from "../helpers/getLongueurSections";
import { Section } from "../types/Section";
import { LaineBois } from "../types/produits/LaineBois";
import SectionLaineBois from "./sections/SectionProduit";
import { PlaqueOsb } from "../types/produits/PlaqueOsb";

export default function Root() {
  const [piece, setPiece] = useState<Piece>(CUISINE_DATA);
  const [uIState, setUIState] = useState<UIState>({
    lainesBois: true,
    lainesBoisChutes: false,
    plaquesOsb: true,
    plaquesOsbChutes: false,
    tasseaux: false,
    visEtClous: false,
  });
  const laineBois = useMemo(
    () => LAINES_BOIS_DATA[piece.laineBoisIndex],
    [piece.laineBoisIndex]
  );
  const lainesBoisSectionsEtRestesParLongueurs = useMemo(
    () =>
      piece.longueurs.map((longueur) =>
        getLongueurSections(longueur, laineBois)
      ),
    [laineBois]
  );
  const [lainesBoisSectionsTotal, lainesBoisChutesTotal] = useMemo(
    () =>
      lainesBoisSectionsEtRestesParLongueurs.reduce(
        (acc, { sections, reste }) => [
          [...acc[0], ...sections],
          [...acc[1], ...reste],
        ],
        [[], []] as [Section<LaineBois>[], Section<LaineBois>[]]
      ),
    [lainesBoisSectionsEtRestesParLongueurs]
  );
  const plaqueOsb = useMemo(
    () => PLAQUES_OSB_DATA[piece.plaqueOsbIndex],
    [piece.plaqueOsbIndex]
  );
  const plaquesOsbSectionsEtRestesParLongueurs = useMemo(
    () =>
      piece.longueurs.map((longueur) =>
        getLongueurSections(longueur, plaqueOsb)
      ),
    [plaqueOsb]
  );
  const [plaquesOsbSectionsTotal, plaquesOsbChutesTotal] = useMemo(
    () =>
      plaquesOsbSectionsEtRestesParLongueurs.reduce(
        (acc, { sections, reste }) => [
          [...acc[0], ...sections],
          [...acc[1], ...reste],
        ],
        [[], []] as [Section<PlaqueOsb>[], Section<PlaqueOsb>[]]
      ),
    [plaquesOsbSectionsEtRestesParLongueurs]
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
            sectionsEtChutesLaineBois={lainesBoisSectionsEtRestesParLongueurs}
            sectionsEtChutesPlaquesOsb={plaquesOsbSectionsEtRestesParLongueurs}
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
          <h3>Sections</h3>
          <div className="sections--container">
            {lainesBoisSectionsTotal.map((section) => (
              <SectionLaineBois key={section.id} section={section} />
            ))}
          </div>
          <h3>Chutes</h3>
          <div className="sections--container">
            {lainesBoisChutesTotal.map((section) => (
              <SectionLaineBois key={section.id} section={section} />
            ))}
          </div>
        </>
      </RootSection>
      <RootSection>
        <>
          <h2>Les plaques OSB</h2>
          <h3>Sections</h3>
          <div className="sections--container">
            {plaquesOsbSectionsTotal.map((section) => (
              <SectionLaineBois key={section.id} section={section} />
            ))}
          </div>
          <h3>Chutes</h3>
          <div className="sections--container">
            {plaquesOsbChutesTotal.map((section) => (
              <SectionLaineBois key={section.id} section={section} />
            ))}
          </div>
        </>
      </RootSection>
    </div>
  );
}
