import Axios from "axios";

export const Login = (data) => {
  return new Promise((resolve, error) => {
    Axios.post("/login", data)
      .then((res) => {
        console.log(res.data);
        return resolve(res.data);
      })
      .catch((err) => {
          console.log(err)
          return err
      });
  });
};
