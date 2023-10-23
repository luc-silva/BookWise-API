interface Book {
  id: number;
  author_id: number;
  pages: number;
  title: string;
  description?: string;
  store_url?: string;
  published_date: Date;
}
