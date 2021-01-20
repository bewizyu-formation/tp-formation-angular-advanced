export interface Quizz {
  question: string;
  answers: QuizzAnswer[];
}

export interface QuizzAnswer {
  answer: string;
  isCorrect: boolean;
}


export interface UserInfos {
  id: number;
  email: string;
  active: number;
  firstname: string;
  lastname: string;
  deleted_at?: any;
  created_at: string;
  updated_at: string;
  user_role: Userrole;
  user_partner: Userpartner;
}

export interface Userpartner {
  id: number;
  name: string;
  vat_number: string;
  siret: string;
  contact_description: string;
  deleted_at?: any;
  created_at: string;
  updated_at: string;
}

export interface Userrole {
  id: number;
  label: string;
  name: string;
  deleted_at?: any;
}

export interface User{
  firstname: string;
  lastname: string;
  email: string;
}
