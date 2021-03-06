import {
  SignIn,
  SignUp,
  Welcome,
  Main,
  Notifications,
  InnerCollection,
} from '../views';

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
  {
    name: 'Notifications',
    component: Notifications,
    options: { title: 'Ειδοποιήσεις' },
  },
  {
    name: 'InnerCollection',
    component: InnerCollection,
    options: { title: 'Συλλογή' },
  },
  {
    name: 'Main',
    component: Main,
    options: { header: () => null },
  },
];
