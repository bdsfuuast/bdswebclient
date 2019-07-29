export function FetchData(path) {
  // const url = "http://agpstore.000webhostapp.com/postform.php";
  const url = "http://localhost:56280/api/" + path;
  // let AuthData = sessionStorage.getItem("access_token");
  // console.log(AuthData);
  // return;
  let fetchData = {
    headers: {
      Authorization: "bearer " + sessionStorage.getItem("access_token")
    }
  };
  return new Promise((resolve, reject) => {
    fetch(url, fetchData)
      .then(res => res.json())
      .then(function(data) {
        console.log(data);
        // if (data.error) throw new Error(data.error_description);
        resolve(data);
        //access_token , expires_in , token_type
      })
      .catch(error => {
        reject(error);
      });
  });

  // .then(function(e) {
  //   if (e.status !== 200) throw new Error("Something went wrong");
  //   console.log(e);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
}
