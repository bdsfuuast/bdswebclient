import { ApiUrl } from "./Constants";

export function PostData(path, data, delay = 300, errorDelay = 200) {
  // const url = "http://agpstore.000webhostapp.com/postform.php";
  const url = ApiUrl + path;
  let fetchData = {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: sessionStorage.getItem("access_token")
    },
    body: JSON.stringify(data)
  };

  return new Promise((resolve, reject) => {
    fetch(url, fetchData)
      .then(res => {
        if (res.status === 401) {
          window.location.href = "/";
          return;
        }
        if (res.status === 200) return res.json();

        throw new Error("Something went wrong Error: " + res.status);
      })
      .then(function(resp) {
        if (resp.Code > 0 && resp.Code <= 50) throw new Error(resp.Message);
        setTimeout(function() {
          resolve(resp);
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
