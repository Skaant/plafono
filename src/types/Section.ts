import { Longueur } from "./Longueur";

export type Section<Produit> = {
  id: string;
  parent: Longueur;
  produit: Produit;
  produitIndex: number;
  longueur: number;
  largeur: number;
};
