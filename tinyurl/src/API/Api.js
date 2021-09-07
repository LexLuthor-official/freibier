async function getData() {
    const basicUrl = "http://localhost:3030";

    return await fetch(`${basicUrl}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  export { getData };