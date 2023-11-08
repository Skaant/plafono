import { Longueur } from "./Longueur";

export type Piece = {
  readonly nom: string;
  readonly nombreLongueurs: number;
  plaqueOsb: number;
  distanceEntreTassaux: number;
  longueurs: Longueur[];
};
