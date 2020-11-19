export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartialType = Partial<Profile>; // 全てのプロパティがオプショナルになる
type RequiredType = Required<Profile>; // 全てのプロパティが必須になる
