export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
  stock: number;
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface EmailAddress {
  email_address: string;
  id: string;
  linked_to: any[];
  object: string;
  reserved: boolean;
  verification: any;
}

export interface ExternalAccount {
  approved_scopes: string;
  email_address: string;
  family_name: string;
  given_name: string;
  google_id: string;
  id: string;
  label: null | string;
  object: string;
  picture: string;
  public_metadata: Record<string, any>;
  username: null | string;
  verification: Record<string, any>;
}

export interface EventData {
  backup_code_enabled: boolean;
  banned: boolean;
  create_organization_enabled: boolean;
  created_at: number;
  delete_self_enabled: boolean;
  email_addresses: EmailAddress[];
  external_accounts: ExternalAccount[];
  external_id: null | string;
  first_name: string;
  has_image: boolean;
  id: string;
  image_url: string;
  last_active_at: number;
  last_name: string;
  last_sign_in_at: null | number;
  locked: boolean;
  lockout_expires_in_seconds: null | number;
  object: string;
  password_enabled: boolean;
  phone_numbers: any[];
  primary_email_address_id: string;
  primary_phone_number_id: null | string;
  primary_web3_wallet_id: null | string;
  private_metadata: Record<string, any>;
  profile_image_url: string;
  public_metadata: Record<string, any>;
  saml_accounts: any[];
  totp_enabled: boolean;
  two_factor_enabled: boolean;
  unsafe_metadata: Record<string, any>;
  updated_at: number;
  username: null | string;
  verification_attempts_remaining: number;
  web3_wallets: any[];
}

export enum Sentiment {
  GOOD,
  BAD,
}
