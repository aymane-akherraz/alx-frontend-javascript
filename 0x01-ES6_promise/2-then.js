export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'Success',
      };
    })
    .catch(() => {
      const err = new Error();
      console.log('Got a response from the API');
      return err;
    });
}
