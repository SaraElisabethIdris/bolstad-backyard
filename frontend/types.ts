export type Participant = {
  id: number;
  startNumber: number;
  firstName: string;
  lastName: string;
  email: string;
  club: string;
  createdAt: Date;
};

export type User = {
  id: number;
  username: string;
  role: "admin" | "regular";
};
