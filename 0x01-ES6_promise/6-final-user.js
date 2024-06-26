import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)]).then((res) => {
    const myArray = [];
    for (const obj of res) {
      if (obj.status === 'rejected') {
        myArray.push({ status: obj.status, value: `Error: ${obj.reason.message}` });
      } else {
        myArray.push({ status: obj.status, value: obj.value });
      }
    }
    return myArray;
  });
}
