import { Longueur } from "../types/Longueur";
import { Section } from "../types/Section";
import { SectionsEtChutes } from "../types/SectionsEtChutes";
import { Produit as ProduitType } from "../types/produits/Produit";

export function getLongueurSections<Produit extends ProduitType>(
  longueur: Longueur,
  produit: Produit
): SectionsEtChutes<Section<Produit>> {
  const sections: Section<Produit>[] = [];
  const chutes: Section<Produit>[] = [];
  let _longueurToFill = longueur.longueur;
  let nbProduits = 0;
  while (_longueurToFill) {
    if (produit.longueur > _longueurToFill) {
      chutes.push({
        id: `${longueur.id}-${chutes.length + 1}`,
        parent: longueur,
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
    chutes,
    nbProduits,
  };
}
