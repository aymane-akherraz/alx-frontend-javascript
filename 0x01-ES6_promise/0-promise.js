export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    resolve('Promise Resolved');
    reject(Error('Promise Rejected'));
  });
  return myPromise;
}
