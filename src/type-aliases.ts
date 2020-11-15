export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hi';

type Profile = {
  name: string,
  age: number 
};

const example1: Profile = {
  name: 'Ham',
  age: 43
}

const example2: Profile = {
  name: 'Yamada',
  age: 22
}

type Profile2 = typeof example2;

const example3: Profile2 = {
  name: 'Yoshida',
  age: 16
}