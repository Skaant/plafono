import { Longueur } from "./Longueur";

export type Piece = {
  readonly nom: string;
  readonly nombreLongueurs: number;
  plaqueOsbIndex: number;
  visIndex: number;
  clouIndex: number;
  distanceEntreTassaux: number;
  longueurs: Longueur[];
};
