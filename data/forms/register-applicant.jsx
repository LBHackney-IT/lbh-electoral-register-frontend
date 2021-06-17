import NATIONALITIES from 'data/nationalities'

Date.today;

export default {
    title: 'Applicant Register To Vote Form',
    path: '/form/register-applicant/',
    successMessage: 'Application submitted to DWP',
    steps: [
        {
            id: 'name',
            title: "Name",
            components: [
                {
                    component: 'TextInput',
                    name: 'first_name',
                    width: '30',
                    label: 'First name(s)',
                    rules: { required: true },
                },
                {
                    component: 'TextInput',
                    name: 'last_name',
                    width: '30',
                    label: 'Last name',
                    rules: { required: true },
                },
            ]
        },
        {
            id: 'address',
            title: "Address",
            components: [
                {
                    component: 'TextInput',
                    name: 'address_ln1',
                    label: 'Number and Street',
                    rules: { required: true },
                },
                {
                    component: 'TextInput',
                    name: 'address_ln2',
                    rules: { required: false },
                },
                // {
                //     component: 'TextInput',
                //     name: 'address_ln3',
                //     rules: { required: false },
                // },
                {
                    component: 'TextInput',
                    name: 'postcode',
                    label: 'Postcode',
                    rules: { required: true },
                },
                {
                    component: 'Radios',
                    name: 'lived_at_another_address',
                    label: 'Does the elector live at another address?',
                    options: [
                      { value: 'Y', text: 'Yes' },
                      { value: 'N', text: 'No' },
                    ],
                    rules: { required: true },
                },
            ]
        },
        {
            id: 'previous-address',
            title: "Previous address",
            components: [
                {
                    component: 'Radios',
                    name: 'moved_house',
                    label: 'Moved house in the last 12 months?',
                    options: [
                      { value: 'Y', text: 'Yes' },
                      { value: 'N', text: 'No' },
                    ],
                    rules: { required: true },
                },
                {
                    conditionalRender: (data) => data.moved_house === 'Y',
                    component: 'TextInput',
                    name: 'previous_address_ln1',
                    label: 'Previous address',
                },
                {
                    conditionalRender: (data) => data.moved_house === 'Y',
                    component: 'TextInput',
                    name: 'previous_address_ln2',
                },
                {
                    conditionalRender: (data) => data.moved_house === 'Y',
                    component: 'TextInput',
                    name: 'previous_postcode',
                    label: 'Previous postcode',
                },
                {
                    conditionalRender: (data) => data.moved_house === 'Y',
                    component: 'Radios',
                    name: 'previous_address_overseas',
                    label: 'If address was overseas, was the elector registered as an overseas voter?',
                    options: [
                        { value: 'Y', text: 'Yes' },
                        { value: 'N', text: 'No' },
                    ]
                },
            ]
        },
        {
            id: 'contact-details',
            title: "Contact details",
            components: [
                {
                    component: 'EmailInput',
                    name: 'email_address',
                    label: 'Email address',
                    rules: { required: false },
                },
                {
                    component: 'PhoneInput',
                    name: 'phone_input',
                    label: 'Phone number',
                    rules: { required: false },
                },
            ]
        },
        {
            id: 'personal-details',
            title: "Personal details",
            components: [
                {
                    component: 'Select',
                    name: 'Nationality',
                    label: "What is the elector's nationality?",
                    options: NATIONALITIES
                },
                {
                    component: 'DateInput',
                    name: 'dob',
                    id: 'myDate',
                    label: 'Date of birth',
                    hint: 'For example, 31 03 1980',
                    rules: { required: true, min: '2000-13-13' }
                },
                {
                    conditionalRender: (data) => data.dob === null,
                    component: 'Radios',
                    name: 'previous_address_overseas',
                    label: 'If you do not know the date of birth, please tick the correct group',
                    options: [
                        { value: 'u18', text: 'Under 18' },
                        { value: '18-75', text: '18-75' },
                        { value: '76+', text: 'Aged 76 or over' },
                    ]
                },
                {
                    component: 'TextInput',
                    name: 'nino',
                    width: '30',
                    label: 'National insurance number',
                    hint: 'For example QQ123456A',
                    rules: { required: false },
                },
                {
                    component: 'TextInput',
                    name: 'reasons',
                    label: 'Reasons for no nationality, date of birth, or national insurance number',
                },
            ]
        },
        {
            id: 'additional-info',
            title: "Additional information",
            components: [
                {
                    component: 'Checkbox',
                    name: 'changed_name',
                    width: '30',
                    label: 'Changed name?',
                },
                {
                    conditionalRender: (data) => data.changed_name === true,
                    component: 'TextInput',
                    name: 'previous_name',
                    label: 'Previous Name',
                },
                {
                    conditionalRender: (data) => data.changed_name === true,
                    component: 'DateInput',
                    name: 'previous_name_input',
                    label: 'Date name changed'
                },
                {
                    component: 'Checkbox',
                    name: 'voting_proxy_check',
                    label: 'Voting by post or proxy?',
                    width: 30,
                },
                {
                    conditionalRender: (data) => data.voting_proxy_check === true,
                    component: 'Radios',
                    name: 'voting_proxy_type',
                    label: 'Applicant voting by post or proxy?',
                    options: [
                        { value: 'post', text: 'By post' },
                        { value: 'proxy', text: 'By proxy' }
                    ]
                },
                {
                    component: 'Checkbox',
                    name: 'open_register',
                    label: 'Do not want to be included in the open register?',
                    width: 30,
                },
            ]
        },
        {
            id: 'signature',
            title: "Signature",
            components: [
                {
                    component: 'Checkbox',
                    name: 'declaration',
                    label: 'Applicant signature provided?',
                    rules: { required: true }
                },
                {
                    conditionalRender: (data) => data.declaration === true,
                    component: 'DateInput',
                    name: 'signature_date',
                    label: 'Date application signed'
                },
            ],
        }
]
};