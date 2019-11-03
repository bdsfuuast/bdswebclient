import { ApiUrl } from "../variable";

export function PostData(path, data) {
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
