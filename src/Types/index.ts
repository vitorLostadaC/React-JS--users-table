export interface UserType {
  id: string;
  name: string;
  email: string;
  enterprise: string;
  profile: string;
}

export interface MenuConfigType {
  open: boolean;
  preferences: {
    linePerPage: "normal" | "increased";
    columns: {
      user: boolean;
      email: boolean;
      client: boolean;
      enterprise: boolean;
    };
  };
}
