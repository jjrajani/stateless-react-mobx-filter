import createUser from './createUser';

const USERS = [
  createUser({
    name:'Jenna',
    password: 'humdrum',
    email: 'humdrum@hum.drum',
    dob: new Date('1/30/1989'),
  }),
  createUser({
    name:'Donika',
    password: 'duhneekah',
    email: 'duhneekah@duh.neekah',
    dob: new Date('10/25/1984'),
  }),
  createUser({
    name:'Bailey',
    password: 'bailey',
    email: 'bailey@bai.ley',
    dob: new Date('3/16/2017'),
  }),
];

export default USERS;
