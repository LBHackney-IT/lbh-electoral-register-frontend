import { Elector } from 'types';

export const electors: Elector[] = [
  {
    address_ln1: '1 Hillman Street',
    address_ln2: 'London, United Kingdom',
    changed_name: true,
    dob: '1990-07-04',
    email_address: 'fiona.sampley@gmail.com',
    first_name: 'Fiona',
    last_name: 'Sampley',
    lives_at_another_address: 'N',
    moved_house: 'N',
    nationality: 'British',
    nino: 'QQ123456A',
    open_register: true,
    phone_input: '1234567890',
    postcode: 'E8 1DY',
    previous_name: 'Fiona Exampley',
    previous_name_date: '2012-12-12',
    reasons: '',
    signature: true,
    signature_date: '2021-05-04',
    time_created: '2021-06-22 11:07:09',
    urn: 'cdaa2-b760-40a0-5205-5a2e40007c0',
    voting_proxy_check: false,
    verification_date: '2021-05-14',
  },
  {
    address_ln1: '5 Morning Lane',
    address_ln2: 'London, United Kingdom',
    changed_name: false,
    dob: '1984-10-31',
    email_address: 'hassan@example.com',
    first_name: 'Hassan',
    last_name: 'Exampleson',
    lives_at_another_address: 'Y',
    moved_house: 'Y',
    nationality: 'British',
    nino: 'OK543210Y',
    open_register: false,
    phone_input: '07333222111',
    postcode: 'E9 6ND',
    previous_address_ln1: '24 Chestnut Avenue',
    previous_address_ln2: 'London, United Kingdom',
    previous_address_overseas: 'N',
    previous_postcode: 'N8 8NY',
    reasons: '',
    signature: true,
    signature_date: '2021-06-14',
    time_created: '2021-06-22 11:40:11',
    urn: '0816b-7b44-2f87-10bd-a05f7adb36a',
    voting_proxy_check: true,
    voting_proxy_type: 'post',
    verification_date: '2021-06-21',
  },
  {
    address_ln1: '224 Homerton High Street',
    address_ln2: 'London, United Kingdom',
    changed_name: false,
    dob: '1960-12-25',
    email_address: 'brittany.faker@yahoo.com',
    first_name: 'Brittany',
    last_name: 'Faker',
    lives_at_another_address: 'N',
    moved_house: 'N',
    nationality: 'British',
    nino: 'ME163599B',
    open_register: false,
    phone_input: '071099177600',
    postcode: 'E9 6AS',
    reasons: '',
    signature: true,
    signature_date: '2021-06-21',
    time_created: '2021-06-22 11:48:54',
    urn: 'af884-e15b-415-c84-b5ce0e7d8a4',
    voting_proxy_check: false,
    verification_date: '2021-06-25',
  },
];

export const headers = [
  { label: 'Address line 1', key: 'address_ln1' },
  { label: 'Address line 2', key: 'address_ln2' },
  { label: 'Changed name?', key: 'changed_name' },
  { label: 'Age range', key: 'age_range' },
  { label: 'Signature?', key: 'signature' },
  { label: 'Date of birth', key: 'dob' },
  { label: 'Email address', key: 'email_address' },
  { label: 'First name', key: 'first_name' },
  { label: 'Last name', key: 'last_name' },
  { label: 'Lives at another address?', key: 'lives_at_another_address' },
  { label: 'Moved house in the last 12 months?', key: 'moved_house' },
  { label: 'Nationality', key: 'nationality' },
  { label: 'National insurance number', key: 'nino' },
  {
    label: 'Do not want to be included in the open register?',
    key: 'open_register',
  },
  { label: 'Phone number', key: 'phone_input' },
  { label: 'Postcode', key: 'postcode' },
  { label: 'Previous address line 1', key: 'previous_address_ln1' },
  { label: 'Previous address line 2', key: 'previous_address_ln2' },
  { label: 'Previous address overseas?', key: 'previous_address_overseas' },
  { label: 'Previous name', key: 'previous_name' },
  { label: 'Date of name change', key: 'previous_name_date' },
  { label: 'Previous postcode', key: 'previous_postcode' },
  {
    label:
      'Reasons for no nationality, date of birth, or national insurance number',
    key: 'reasons',
  },
  { label: 'Date of signature', key: 'signature_date' },
  { label: 'Time created', key: 'time_created' },
  { label: 'Unique ID', key: 'urn' },
  { label: 'Verification date', key: 'verification_date' },
  { label: 'Voting by post or proxy?', key: 'voting_proxy_check' },
  { label: 'Voting proxy type', key: 'voting_proxy_type' },
];

export const testElector: Elector = {
  address_ln1: 'Test address_ln1',
  address_ln2: 'Test address_ln2',
  age_range: 'Test age_range',
  changed_name: true,
  signature: true,
  dob: 'Test dob',
  email_address: 'Test email_address',
  first_name: 'Test first_name',
  last_name: 'Test last_name',
  lives_at_another_address: 'Test lives_at_another_address',
  moved_house: 'Test moved_house',
  nationality: 'Test nationality',
  nino: 'Test nino',
  open_register: true,
  phone_input: 'Test phone_input',
  postcode: 'Test postcode',
  previous_address_ln1: 'Test previous_address_ln1',
  previous_address_ln2: 'Test previous_address_ln2',
  previous_address_overseas: 'Test previous_address_overseas',
  previous_name: 'Test previous_name',
  previous_name_date: 'Test previous_name_date',
  previous_postcode: 'Test previous_postcode',
  reasons: 'Test reasons',
  signature_date: 'Test signature_date',
  time_created: 'Test time_created',
  urn: 'Test-urn',
  verification_date: 'Test verification_date',
  voting_proxy_check: true,
  voting_proxy_type: 'Test voting_proxy_type',
};
