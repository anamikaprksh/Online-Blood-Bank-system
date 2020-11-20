import Axios from "axios";

export const Login = (data) => {
  return new Promise((resolve,reject) => {
    Axios.post("/login", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data)
      });
  });
};

export const Signup=(data)=>{
  return new Promise((resolve,reject)=>{
    Axios.post('/signup',data)
    .then(res=>{
      resolve(res.data)
    })
    .catch((err)=>{
      reject(err.response.data)
    })
  })
}

