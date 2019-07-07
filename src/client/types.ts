export type UUID = string;

export type Session = {};

export type ApiError = {
  code?: number | undefined;
  message: string;
  parameters?: { [key: string]: any } | undefined;
};

export type SessionInfo = {
  user: { obj: UUID; name: string };
  role: { obj: UUID; name: string };
  realm: { obj: UUID; name: string };
};
