import { UseFormRegister } from "react-hook-form";

interface IContact {
  first_name: string;
  last_name: string;
  phone_number: string;
  message: string;
  company: string;
  email: string;
  country: string;
}

interface ILoginAndRegister {
  email?: string;
  password?: string;
  full_name?: string;
}  

export type Tlabel = keyof IContact | keyof ILoginAndRegister 
export type TRegisterGroup = IContact | ILoginAndRegister

export interface Props {
  name: string;
  type: string;
  className ?: string;
  label: Tlabel;
  place_holder?: string;
  required?: boolean
  register: UseFormRegister<TRegisterGroup>;
}