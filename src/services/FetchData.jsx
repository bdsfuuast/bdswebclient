import { ApiUrl } from "./Constants";
export function FetchData(path, delay = 3000, errorDelay = 2000) {
  // const url = "http://agpstore.000webhostapp.com/postform.php";
  const url = ApiUrl + path;
  // let AuthData = sessionStorage.getItem("access_token");
  // console.log(AuthData);
  // return;
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
        console.log(error);
        setTimeout(function() {
          reject(error.message);
        }, errorDelay);
      });
  });
}
