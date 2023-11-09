import { Produit } from "./Produit";

export type LaineBois = Produit & {
  /** En cm */
  epaisseur: number;
  resistanceThermique: number;
};
