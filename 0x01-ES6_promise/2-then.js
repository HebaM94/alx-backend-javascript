export default function handleResponseFromAPI(promise) {
  return promise
    .then((resolve = { status: 200, body: 'success' }) => resolve)
    .catch((error = new Error()) => error)
    .finally(console.log('Got a response from the API'));
}
