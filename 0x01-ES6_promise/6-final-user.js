import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)]).then((res) => {
    for (const obj of res) {
      if ('reason' in obj) {
        obj.value = obj.reason;
        delete obj.reason;
      }
    }
    return res;
  });
}
