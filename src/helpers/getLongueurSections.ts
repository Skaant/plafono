import { Longueur } from "../types/Longueur";
import { Section } from "../types/Section";
import { Produit as ProduitType } from "../types/produits/Produit";

export type GetLongueurSectionsReturn<Produit> = {
  id: string;
  sections: Section<Produit>[];
  reste: Section<Produit>[];
  nbProduits: number;
};

export function getLongueurSections<Produit extends ProduitType>(
  longueur: Longueur,
  produit: Produit,
  chutes?: Section<Produit>[]
): GetLongueurSectionsReturn<Produit> {
  const sections: Section<Produit>[] = [];
  const reste: Section<Produit>[] = [];
  let _longueurToFill = longueur.longueur;
  let nbProduits = 0;
  while (_longueurToFill) {
    if (produit.longueur > _longueurToFill) {
      reste.push({
        id: `${longueur.id}-${reste.length + 1}`,
        produit,
        produitIndex: nbProduits + 1,
        longueur: produit.longueur - _longueurToFill,
        largeur: produit.largeur,
      });
      nbProduits++;
    }
    sections.push({
      id: `${longueur.id}-${sections.length + 1}`,
      parent: longueur,
      produit,
      produitIndex: nbProduits,
      longueur: Math.min(produit.longueur, _longueurToFill),
      largeur: produit.largeur,
    });
    _longueurToFill -= Math.min(produit.longueur, _longueurToFill);
  }
  return {
    id: `${longueur.id}-${produit.nom}`,
    sections,
    reste,
    nbProduits,
  };
}
