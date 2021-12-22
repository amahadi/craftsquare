function getJson(url) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((response) => {
          resolve(response);
        });
      } else {
        response.json()
        .then((response) => {
          reject(response);
        });
      }
    })
  });
  return promise;
}

function postJson(url, body) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((response) => {
          resolve(response);
        });
      } else {
        response.json()
        .then((response) => {
          reject(response);
        });
      }
    })
  });
  return promise;
}

function putJson(url, body) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((response) => {
          resolve(response);
        });
      } else {
        response.json()
        .then((response) => {
          reject(response);
        });
      }
    })
  });
  return promise;
}

function deleteJson(url, body) {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((response) => {
          resolve(response);
        });
      } else {
        response.json()
        .then((response) => {
          reject(response);
        });
      }
    })
  });
  return promise;
}



export { getJson, postJson, putJson, deleteJson };