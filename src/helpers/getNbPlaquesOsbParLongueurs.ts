import { Piece } from "../types/Piece";
import { PlaqueOsb } from "../types/PlaqueOsb";

export function getNbPlaquesOsbParLongueurs(
  piece: Piece,
  plaqueOsb: PlaqueOsb
) {
  return piece.longueurs.map((longueur) =>
    Math.ceil(longueur.longueur / plaqueOsb.longueur)
  );
}
