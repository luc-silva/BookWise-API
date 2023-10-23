interface Author {
  id: number;
  first_name: string;
  last_name: string;
  about?: string;
  nationality: string;
  birth_date: Date;
  has_author_died: boolean;
  death_date: Date;
}
