import { Longueur } from "./Longueur";

export type Piece = {
  readonly nom: string;
  laineBoisIndex: number;
  plaqueOsbIndex: number;
  visIndex: number;
  clouIndex: number;
  distanceEntreTassaux: number;
  tailleDesTassaux1Vis: number;
  tailleDesTassaux2Vis: number;
  tasseauIndex: number;
  longueurs: Longueur[];
};
