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
    .then(
      response => {
        if(response.ok){
          response.json()
          .then((response) => {
            resolve(response);
          })
        } else {
          response.json()
          .then((response) => {
            reject(response.errors);
          })
        }
      },
      error => {
        error.json()
        .then((errorResponse) => {
          reject(errorResponse.errors);
        })
      }
    )
    .catch((error) => {
      reject(["Something went wrong", error]);
    });
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
    .then(
      response => {
        if(response.ok){
          response.json()
          .then((response) => {
            resolve(response.data);
          })
        } else {
          response.json()
          .then((response) => {
            reject(response.errors);
          })
        }
      },
      error => {
        reject(["Something went wrong", error]);
      }
    )
    .catch((error) => {
      error.json()
        .then((errorResponse) => {
          reject(errorResponse.errors);
        })
    });
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
    .then(
      response => {
        if (response.ok) {
          response.json()
            .then((response) => {
              resolve(response.data);
            })
        } else {
          response.json()
            .then((response) => {
              reject(response.errors);
            })
        }
      },
      error => {
        error.json()
          .then((errorResponse) => {
            reject(errorResponse.errors);
          })
      }
    )
    .catch((error) => {
      reject(["Something went wrong", error]);
    });
  });
  return promise;
}

function deleteJson(url) {
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
    .then(
      response => {
        if(response.ok){
          response.json()
          .then((response) => {
            resolve(response.data);
          })
        } else {
          response.json()
          .then((response) => {
            reject(response.errors);
          })
        }
      },
      error => {
        error.json()
        .then((errorResponse) => {
          reject(errorResponse.errors);
        })
      }
    )
    .catch((error) => {
      reject(["Something went wrong", error]);
    });
  });
  return promise;
}



export { getJson, postJson, putJson, deleteJson };