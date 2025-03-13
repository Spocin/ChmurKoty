export interface AuthenticationResponse {
  success: boolean;
  token?: string;
}

export interface SuccessfulAuthenticationResponse extends AuthenticationResponse {
  success: true;
  token: string;
}

export interface FailedAuthenticationResponse extends AuthenticationResponse {
  success: false;
}

export type AuthenticationSettledResult = SuccessfulAuthenticationResponse | FailedAuthenticationResponse;
