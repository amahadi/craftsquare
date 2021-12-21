function AuthenticatedGet(url) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(response.json());
      }
    })
  });
  return promise;
}

export { AuthenticatedGet };