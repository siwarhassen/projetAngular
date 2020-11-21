import {User} from './user';
import {Objets} from './objets';

export interface Produit
{
  id: number;
  objets: Objets;
  description: string;
  genre: string;
  etat: string;
  couleur: string;
  prix: number;
  photo: string;
  userId: User;



}
