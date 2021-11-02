import { colors } from '../../variables';

export default [
  {
    name: 'personType',
    component: 'select',
    options: [
      { label: 'Κύριος', value: 1 },
      { label: 'Κυρία', value: 2 },
    ],
    title: 'Προσφώνηση',
    required: true,
  },
  {
    name: 'name',
    label: 'Όνομα',
    component: 'input',
    required: true,
  },
  {
    name: 'surname',
    label: 'Επώνυμο',
    component: 'input',
    required: true,
  },
  {
    name: 'phonenumber',
    label: 'Κινητό',
    component: 'input',
    required: true,
    keyboardType: 'number-pad',
  },
  {
    name: 'email',
    label: 'Email',
    component: 'input',
    required: false,
  },
  {
    name: 'password',
    label: 'Κωδικός',
    component: 'input',
    required: true,
    secure: true,
    description:
      'Ο κωδικός σου πρέπει να αποτελείται από τουλάχιστον 8 χαρακτήρες και να περιέχει συνδυασμό λατινικών και αριθμητικών χαρακτήρων.',
    descriptionStyling: {
      fontSize: 16,
      fontStyle: 'italic',
      color: colors.greyMid,
    },
  },
  {
    name: 'confirmPassword',
    label: 'Επαλήθευση Κωδικού',
    component: 'input',
    required: true,
    secure: true,
  },
  {
    name: 'dob',
    title: 'Ημερομηνία γέννησης',
    component: 'datepicker',
    required: false,
  },
  {
    name: 'street',
    label: 'Οδός',
    component: 'input',
    required: false,
  },
  {
    name: 'number',
    label: 'Αριθμός',
    component: 'input',
    required: false,
  },
  {
    name: 'state',
    label: 'Περιοχή',
    component: 'input',
    required: false,
  },
  {
    name: 'city',
    label: 'Πόλη',
    component: 'input',
    required: false,
  },
  {
    name: 'postalCode',
    label: 'Τ.Κ.',
    component: 'input',
    required: false,
  },
];
