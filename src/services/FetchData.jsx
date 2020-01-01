import { ApiUrl } from "./Constants";
export function FetchData(path, delay = 300, errorDelay = 200) {
  const url = ApiUrl + path;
  let fetchData = {
    headers: {
      Authorization: sessionStorage.getItem("access_token")
    },
    credentials: "include"
  };
  return new Promise((resolve, reject) => {
    fetch(url, fetchData)
      .then(res => {
        if (res.status === 401) {
          window.location.href = "/";
          return;
        }
        if (res.status === 200 || res.status === 400) return res.json();

        throw new Error("Something went wrong Error: " + res.status);
      })
      .then(function(data) {
        if (data.error) throw new Error(data.error_description);
        setTimeout(function() {
          resolve(data);
        }, delay);
      })
      .catch(error => {
        setTimeout(function() {
          if (
            error.message &&
            error.message.toLowerCase().indexOf("failed to fetch") > -1
          ) {
            reject("no internet connection");
            return;
          }
          reject(error.message);
        }, errorDelay);
      });
  });
}
