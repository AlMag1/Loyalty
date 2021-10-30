import { SignIn, SignUp, Welcome } from '../views';

export const screens = [
  {
    name: 'Welcome',
    component: Welcome,
    options: { header: () => null },
  },
  {
    name: 'SignIn',
    component: SignIn,
    options: { title: 'Σύνδεση' },
  },
  {
    name: 'SignUp',
    component: SignUp,
    options: { title: 'Εγγραφή' },
  },
];
