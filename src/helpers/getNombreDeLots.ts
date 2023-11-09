export function getNombreDeLots(nombre: number, lot: number = 1) {
  return Math.ceil(nombre / lot);
}
