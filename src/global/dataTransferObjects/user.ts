export interface IAuthenticationResponseDto {
  accessToken: TokenDto;
  refreshToken: TokenDto;
  userInfo: UserDto;
}

export interface IAuthenticationRequestDto {
  email?: string;
  password?: string;
  refreshToken?: string;
  grantType?: string;
}

export interface TokenDto {
  token: string;
  createdAt: Date;
  expirationDate: Date;
}

export interface ICreateNewUserRequestDto {
  name?: string;
  lastName?: string;
  tradingName?: string;
  companyName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  documentNumber?: string;
  birthDate?: string;
  userType?: number;
}

export interface ICreateNewUserResponseDto {
  response: string;
}

export interface UserDto {
  fullName: string;
  userType: UserType;
  personType: PersonType;
  documentNumber: string;
  email: string;
}

export interface IUpdateUserDto {
  id: string;
  name: string;
  lastName: string;
  email: string;
  documentNumber: string;
  phoneNumber: string;
  companyName?: string;
  tradingName?: string;
  userType?: number;
}

export interface IFilterUserProps {
  name?: string;
  documentNumber?: string;
  email?: string;
  startDate?: string;
  finishDate?: string;
}

export enum UserType {
  Provider = 1,
  Business = 2
}

export enum PersonType {
  Natural = 1,
  Legal = 2
}
