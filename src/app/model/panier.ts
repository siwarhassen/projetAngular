import {Produit} from './produit';
import {User} from './user';

export class Panier
{
  id: number;
  produit: Produit[];
  user: User;
}
