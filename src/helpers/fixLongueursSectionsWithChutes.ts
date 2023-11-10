import { Piece } from "../types/Piece";
import { SectionChutesFixed } from "../types/SectionChutesFixed";
import { SectionsEtChutes } from "../types/SectionsEtChutes";
import { Produit } from "../types/produits/Produit";
import { getLongueurSections } from "./getLongueurSections";

export function fixLongueursSectionsWithChutes<P>(
  piece: Piece,
  produit: Produit
): {
  sectionsTotal: SectionChutesFixed<Produit>[];
  chutesTotal: SectionChutesFixed<Produit>[];
  sectionsEtChutes: SectionsEtChutes<SectionChutesFixed<P>>[];
} {
  const sectionsEtRestesParLongueurs = piece.longueurs.map((longueur) =>
    getLongueurSections(longueur, produit)
  );
  const sectionsTotal = sectionsEtRestesParLongueurs
    .reduce(
      (acc, { sections }) => [...acc, ...sections],
      [] as SectionChutesFixed<Produit>[]
    )
    .sort((a, b) => a.longueur - b.longueur);
  const chutesTotal = sectionsEtRestesParLongueurs
    .reduce(
      (acc, { chutes }) => [...acc, ...chutes],
      [] as SectionChutesFixed<Produit>[]
    )
    .sort((a, b) => a.longueur - b.longueur);
  sectionsTotal
    .filter(({ longueur }) => longueur !== produit.longueur)
    .forEach((section) => {
      if (chutesTotal.length) {
        const chute = chutesTotal.find(
          ({ usedInSectionId, parent, longueur }) =>
            !usedInSectionId &&
            section.parent !== parent &&
            longueur >= section.longueur
        );
        if (chute) {
          const sectionTotalIndex = sectionsTotal.indexOf(section);
          sectionsTotal[sectionTotalIndex] = {
            ...section,
            usedChuteId: chute.id,
          };
          const chuteTotalIndex = chutesTotal.indexOf(chute);
          chutesTotal[chuteTotalIndex] = {
            ...chute,
            longueur: section.longueur,
            usedInSectionId: section.id,
          };
          if (chute.longueur - section.longueur)
            chutesTotal.splice(chuteTotalIndex, 0, {
              id: `${chute.id}-1`,
              parent: chute.parent,
              produit,
              produitIndex: section.produitIndex + 1,
              longueur: chute.longueur - section.longueur,
              largeur: chute.largeur,
              fromChuteId: chute.id,
            });
        }
      }
    });
  return {
    sectionsTotal,
    chutesTotal,
    sectionsEtChutes: piece.longueurs.map((longueur, index) => {
      const sections = sectionsTotal
        .filter(({ parent }) => parent?.id === longueur.id)
        .sort((a, b) => a.id.localeCompare(b.id));
      const chutes = chutesTotal
        .filter(({ parent }) => parent?.id === longueur.id)
        .sort((a, b) => a.id.localeCompare(b.id));
      return {
        id: sectionsEtRestesParLongueurs[index].id,
        sections,
        chutes,
        nbProduits:
          sections.filter(({ usedChuteId }) => !usedChuteId).length + 1,
      } as SectionsEtChutes<SectionChutesFixed<P>>;
    }),
  };
}
