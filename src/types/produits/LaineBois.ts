import { Produit } from "./Produit";
import { EpaisseurTrait } from "./_traits/Epaisseur.trait";

export type LaineBois = Produit &
  EpaisseurTrait & {
    resistanceThermique: number;
  };
