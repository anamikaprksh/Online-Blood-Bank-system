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

export const Details=(data)=>{
  return new Promise((resolve,reject)=>{
    Axios.post('/details',data)
    .then(res=>{
      resolve(res.data)
    })
    .catch((err)=>{
      reject(err.response.data)
    })
  })
}

export const Request=(data)=>{
  return new Promise((resolve,reject)=>{
    Axios.post('/request',data)
    .then(res=>{
      console.log(res.data)
      resolve(res.data)
    })
    .catch((err)=>{
      console.log(err.response.data)
      reject(err.response.data)
    })
  })
}

export const MyRequest=(data)=>{
  return new Promise((resolve,reject)=>{
    const {username}=data
    Axios.get(`/request/notresolved/${username}`)
    .then(res=>{
      // console.log(res.data)
      resolve(res.data)
    })
    .catch((err)=>{
      reject(err.response.data)
    })
  })
}

