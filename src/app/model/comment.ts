
import {User} from './user';
import {Produit} from './produit';

export class Comment
{
  id: number;
  content: string;
  date: string;
  produit: Produit;
  user: User;
}
