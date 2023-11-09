import { Piece } from "../types/Piece";
import { Produit } from "../types/produits/Produit";

export function getNbItemsParLongueur(piece: Piece, produit: Produit) {
  return piece.longueurs.map((longueur) =>
    Math.ceil(longueur.longueur / produit.longueur)
  );
}
