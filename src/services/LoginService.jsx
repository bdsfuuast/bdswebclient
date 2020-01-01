import { TokenUrl } from "./Constants";

export function LoginService(data, url = TokenUrl) {
  // const url = "http://agpstore.000webhostapp.com/postform.php";text/plain;charset=UTF-8
  //const url = TokenUrl;
  // const bodydata =
  //   "username=" +
  //   data.username +
  //   "&password=" +
  //   data.password +
  //   "&grant_type=password";
  let fetchData = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return new Promise((resolve, reject) => {
    fetch(url, fetchData)
      .then(res => res.json())
      .then(function(data) {
        if (data.error) throw new Error(data.error_description);
        sessionStorage.setItem("access_token", data.access_token);
        sessionStorage.setItem("expires_in", data.expires_in);
        sessionStorage.setItem("token_type", data.token_type);
        resolve(true);
        //access_token , expires_in , token_type
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
        }, 1500);
      });
  });
}

// .then(res => res.json())
// .then(response => console.log("Success:", JSON.stringify(response)))
// .catch(error => console.error("Error:", error));
