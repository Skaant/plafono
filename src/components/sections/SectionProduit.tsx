import React from "react";
import { Section as SectionType } from "../../types/Section";
import { Produit } from "../../types/produits/Produit";

export default function SectionProduit({
  section,
}: {
  section: SectionType<Produit>;
}) {
  const dimensionMax = Math.max(section.longueur, section.largeur)
    ? "longueur"
    : "largeur";
  const dimensionMinDiff =
    100 -
    Math.round(
      (Math.min(section.longueur, section.largeur) /
        Math.max(section.longueur, section.largeur)) *
        100
    );
  const xMin = dimensionMax === "longueur" ? 0 + dimensionMinDiff / 2 : 0;
  const xMax = dimensionMax === "longueur" ? 100 - dimensionMinDiff / 2 : 100;
  const yMin = dimensionMax === "largeur" ? 0 + dimensionMinDiff / 2 : 0;
  const yMax = dimensionMax === "largeur" ? 100 - dimensionMinDiff / 2 : 100;
  return (
    <div className="section">
      <div className="section--proportions">
        <div>
          <svg viewBox="0 0 100 100">
            <polygon
              points={`${xMin},${yMin} ${xMax},${yMin} ${xMax},${yMax} ${xMin},${yMax}`}
            >
              {section.id}
            </polygon>
          </svg>
        </div>
      </div>
      <div>
        {section.id} {section.longueur}x{section.largeur}
      </div>
    </div>
  );
}
