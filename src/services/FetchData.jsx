import { ApiUrl } from "../variable";
export function FetchData(path) {
  // const url = "http://agpstore.000webhostapp.com/postform.php";
  const url = ApiUrl + path;
  // let AuthData = sessionStorage.getItem("access_token");
  // console.log(AuthData);
  // return;
  let fetchData = {
    headers: {
      Authorization: sessionStorage.getItem("access_token")
    }
  };
  return new Promise((resolve, reject) => {
    fetch(url, fetchData)
      .then(res => {
        if (res.status !== 200)
          throw new Error("Something went wrong Error: " + res.statusText);
        return res.json();
      })
      .then(function(data) {
        if (data.error) throw new Error(data.error_description);
        resolve(data);
      })
      .catch(error => {
        console.log(error);
        reject(error.message);
      });
  });
}
