export type Participant = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
};

export type User = {
  id: number;
  username: string;
  role: "admin" | "regular";
};
