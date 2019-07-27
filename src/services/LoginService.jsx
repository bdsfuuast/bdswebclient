export function LoginService(data) {
  // const url = "http://agpstore.000webhostapp.com/postform.php";
  const url = "http://localhost:56280/token";
  const bodydata =
    "username=" +
    data.username +
    "&password=" +
    data.password +
    "&grant_type=password";
  let fetchData = {
    method: "POST",
    headers: {
      "content-type": "text/plain;charset=UTF-8"
    },
    body: bodydata
  };
  return new Promise((resolve, reject) => {
    fetch(url, fetchData)
      .then(res => res.json())
      .then(function(data) {
        if (data.error) throw new Error(data.error_description);
        sessionStorage.setItem("authData", data);
        resolve(true);
        //access_token , expires_in , token_type
      })
      .catch(error => {
        reject(error.message);
      });
  });
}

// .then(res => res.json())
// .then(response => console.log("Success:", JSON.stringify(response)))
// .catch(error => console.error("Error:", error));
