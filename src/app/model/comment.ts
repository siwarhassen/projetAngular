import {Produit} from './produit';
import {User} from './user';

export class Comment
{
  id: number;
  contenu: string;
  date: string;
  produitId: number;
  userId: User;
}
