import {Produit} from './produit';
import {User} from './user';

export interface Comment
{
  id: number;
  contenu: string;
  produitId: Produit;
  userId: User;
}
