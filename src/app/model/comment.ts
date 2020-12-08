
import {User} from './user';

export class Comment
{
  id: number;
  content: string;
  date: string;
  produitId: number;
  userId: User;
}
