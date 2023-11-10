import React from "react";
import { Produit } from "../../types/produits/Produit";
import { SectionChutesFixed } from "../../types/SectionChutesFixed";

export default function SectionProduit({
  section,
}: {
  section: SectionChutesFixed<Produit>;
}) {
  const produitMax = Math.max(section.produit.longueur, section.produit.largeur)
    ? "longueur"
    : "largeur";
  const produitMinDiff =
    100 -
    Math.round(
      (Math.min(section.produit.longueur, section.produit.largeur) /
        Math.max(section.produit.longueur, section.produit.largeur)) *
        100
    );
  const produitYMin = produitMax === "largeur" ? 0 + produitMinDiff / 2 : 0;
  const produitYMax = produitMax === "largeur" ? 100 - produitMinDiff / 2 : 100;
  const produitXMin = produitMax === "longueur" ? 0 + produitMinDiff / 2 : 0;
  const produitXMax =
    produitMax === "longueur" ? 100 - produitMinDiff / 2 : 100;
  const sectionDiff = 100 - (section.longueur / section.produit.longueur) * 100;
  const sectionYMin = produitMax === "longueur" ? 0 : 0 + produitMinDiff / 2;
  const sectionYMax = produitMax === "longueur" ? 100 - sectionDiff : 100;
  const sectionXMin =
    produitMax === "largeur"
      ? 0 + produitMinDiff / 2 + sectionDiff
      : 0 + produitMinDiff / 2;
  const sectionXMax =
    produitMax === "largeur"
      ? 100 - produitMinDiff / 2 - sectionDiff
      : 100 - produitMinDiff / 2;
  return (
    <div className={`section${section.fromChuteId ? " section--chute" : ""}`}>
      <div className="section--proportions">
        <div>
          <svg viewBox="0 0 100 100">
            <polygon
              points={`${produitXMin},${produitYMin} ${produitXMax},${produitYMin} ${produitXMax},${produitYMax} ${produitXMin},${produitYMax}`}
              fill="none"
              stroke="#d446"
              strokeWidth={4}
            >
              {section.id}
            </polygon>
            <polygon
              points={`${sectionXMin},${sectionYMin} ${sectionXMax},${sectionYMin} ${sectionXMax},${sectionYMax} ${sectionXMin},${sectionYMax}`}
              fill="#888"
              stroke="black"
            >
              {section.id}
            </polygon>
          </svg>
        </div>
      </div>
      <div>
        {section.id} {section.longueur}x{section.largeur}
        {section.usedChuteId
          ? ` (utilise la chute ${section.usedChuteId})`
          : ""}
        {section.usedInSectionId
          ? ` (est utilisée par section ${section.usedInSectionId})`
          : ""}
        {section.fromChuteId ? ` (reste de ${section.fromChuteId})` : ""}
      </div>
    </div>
  );
}
