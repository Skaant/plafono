import { Produit } from "./Produit";

export type PlaqueOsb = Produit & {
  /** En cm */
  epaisseur: number;
};
