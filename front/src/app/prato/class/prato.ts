import { Restaurante } from '../../restaurante/class/restaurante';

export class Prato {
  id: number;
  nome: string;
  restauranteId: number;
  restaurante: Restaurante;
}
