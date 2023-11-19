export type LoginMutationArguments = {
  username: string;
  password: string;
};

export type LoginMutationResponse = {
  access_token: string;
  expiresIn: number;
  user: User;
};

export type GetMeQueryResponse = User;

export type User = {
  id: string;
  user: string;
  avatar: string;
};

export type ProductStructure = {
  id: string;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
};

export type ProductMeta = {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

export type GetProductsArgs = {
  search?: string;
  limit?: number;
  page?: number;
  promo?: boolean;
  active?: boolean;
};

export type GetProductsResponse = {
  items: ProductStructure[];
  meta: ProductMeta;
};

export type GetProductByIdArgs = {
  id: string;
};

export type GetProductByIdResponse = ProductStructure;

// API_ACTION_TYPES
