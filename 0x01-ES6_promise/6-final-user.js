import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  Promise.allSettled([photoPromise, userPromise]).then((res) => {
    console.log(res);
  });
}
