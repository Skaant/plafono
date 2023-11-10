import { Tasseau } from "../types/produits/Tasseau";

export type GetTasseauxUneLongueurReturn = {
  reste: number;
  tasseaux: number;
  restes: number[];
};

export function getTasseauxUneLongueur(
  sections: number,
  sectionLongueur: number,
  tasseau: Tasseau,
  reste: number = 0
) {
  return [...Array(sections)].reduce(
    ({ reste, tasseaux, restes }) => {
      if (reste < sectionLongueur) {
        tasseaux++;
        reste && restes.push(reste);
        reste = tasseau.longueur;
      }
      reste -= sectionLongueur;
      return {
        reste,
        tasseaux,
        restes,
      };
    },
    {
      reste,
      tasseaux: reste ? 1 : 0,
      restes: [],
    } as GetTasseauxUneLongueurReturn
  );
}
