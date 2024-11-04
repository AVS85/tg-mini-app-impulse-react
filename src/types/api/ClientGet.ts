export interface GetClientPayloadI {
  email: string;
}

export interface GetClientResponseI {
  email: string | null;
  full_name: string | null;
  id: string | null;
  phone_number: string | null;
  telegram_id: string | null;
  user_name: string | null;
}
