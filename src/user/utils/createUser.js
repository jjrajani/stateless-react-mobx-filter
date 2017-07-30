import { observable } from 'mobx';

const today = new Date();
const calcAge = (dob) => {
  let age = {
      years: today.getYear() - dob.getYear(),
      months: today.getMonth() - dob.getMonth(),
  }
  age.months = age.months < 0 ? age.months + 12 : age.months;
  return age;
};

const createUser = ({
  name = 'Anonymous',
  password = 'default',
  email = 'new@user.com',
  dob = new Date(),
}) => observable({
  name: {
    value: name,
    update: function(u, n) {u.name.value = n}
  },
  password: {
    value: password,
    update: function(u, n) {u.password.value = n}
  },
  email: {
    value: email,
    update: function(u, n) {u.email.value = n}
  },
  dob,
  age: function () { return calcAge(this.dob); },
});

export default createUser;
