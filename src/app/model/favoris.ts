import {Produit} from './produit';
import {User} from './user';

export class Favoris
{
  id: number;
  produit: Produit[];
  user: User;
}
