export type Produit = {
  nom: string;
  /** En cm */
  longueur: number;
  /** En cm */
  largeur: number;
  lot?: number;
  /** En € */
  prix: number;
  lien?: string;
};
