import { Section } from "./Section";

export type SectionChutesFixed<Produit> = Section<Produit> & {
  usedChuteId?: string;
  usedInSectionId?: string;
  fromChuteId?: string;
};
