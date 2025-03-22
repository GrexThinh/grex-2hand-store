export type Product = {
  id: number;
  title: string;
  desc: string;
  shortDesc?: string;
  price?: string;
  mainImage: string;
  images: string[];
  type: string;
  quantity?: string;
  manufacturer?: string;
  usageTime?: string;
  isOutstanding: boolean;
};
