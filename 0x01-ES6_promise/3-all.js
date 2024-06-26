import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const imgPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([imgPromise, userPromise]).then((data) => {
    console.log(data[0].body, data[1].firstName, data[1].lastName);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
