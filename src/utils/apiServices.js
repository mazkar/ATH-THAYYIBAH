/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import { variables } from '../Variables'

import { toast } from 'react-toastify'

const baseURL = process.env.REACT_APP_API_URL_DEV

const tokenGlobal = localStorage.getItem('token')
// const token = stores.getState().auth.token;
const config = {
  headers: { Authorization: `Bearer ${tokenGlobal}` },
}

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${tokenGlobal}`,
}

const headersfile = {
  'Content-Type': 'multipart/form-data',
  Authorization: `Bearer ${tokenGlobal}`,
}

//auth api
const Login = (path) => (data) => {
  const body = {
    userName: data.username,
    password: data.password,
  }
  const promise = new Promise((resolve, reject) => {
    axios.post(`${baseURL}${path}`, body).then(
      (result) => {
        resolve(result)
      },
      (err) => {
        reject(err)
      },
    )
  })
  return promise
}

//common api with token
const GET = (path) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios.get(`${baseURL}${path}`, { headers: { Authorization: `Bearer ${token}` } }).then(
      (result) => {
        console.log('i am get :', result.data)
        resolve(result.data)
      },
      (err) => {
        console.log('err', err)
        reject(err)
      },
    )
  })
  return promise
}

const GETParam = (path, id) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios.get(`${baseURL}${path}/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then(
      (result) => {
        console.log('i am get :', result.data)
        resolve(result.data)
      },
      (err) => {
        console.log('error get', err)
        reject(err)
      },
    )
  })
  return promise
}

const GetMenu = (path, id, tokens) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${baseURL}${path}/${id}`, { headers: { Authorization: `Bearer ${tokens}` } }).then(
      (result) => {
        console.log('i am get :', result.data)
        resolve(result.data)
      },
      (err) => {
        console.log('error get', err)
        reject(err)
      },
    )
  })
  return promise
}

const GETParam2 = (path, param1, param2) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .get(`${baseURL}${path}/${param1}/${param2}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (result) => {
          console.log('i am get :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log(err)
          reject(err)
        },
      )
  })
  return promise
}
const GETParam3 = (path, param1, param2, param3) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .get(`${baseURL}${path}/${param1}/${param2}/${param3}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (result) => {
          console.log('i am get :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log(err)
          reject(err)
        },
      )
  })
  return promise
}
const GETParam4 = (path, param1, param2, param3, param4) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .get(`${baseURL}${path}/${param1}/${param2}/${param3}/${param4}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (result) => {
          console.log('i am get :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log(err)
          reject(err)
        },
      )
  })
  return promise
}
const GETParam5 = (path, param1, param2, param3, param4, param5) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .get(`${baseURL}${path}/${param1}/${param2}/${param3}/${param4}/${param5}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (result) => {
          console.log('i am get :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log(err)
          reject(err)
        },
      )
  })
  return promise
}
const GETParam6 = (path, param1, param2, param3, param4, param5, param6) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .get(`${baseURL}${path}/${param1}/${param2}/${param3}/${param4}/${param5}/${param6}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (result) => {
          console.log('i am get :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log(err)
          reject(err)
        },
      )
  })
  return promise
}

const GETBody = (path, body) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .get(`${baseURL}${path}`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config', err)
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}

const POST = (path, body) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config', err)
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}

const POSTParam = (path, body, param) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param}`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config', headers)
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}
const POSTParamQS = (path, body, param, qs) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param}${qs}`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config', headers)
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}

const POSTParam2 = (path, body, param, param2) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param}/${param2}`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post Param2:', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config', headers)
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}

const POSTParam3 = (path, body, param, param2, param3) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param}/${param2}/${param3}`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post Param2:', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config', headers)
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}

const POSTFile = (path, id, file) => {
  var formdata = new FormData()
  formdata.append('fileupload', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${id}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}
const POSTFile3 = (path, file) => {
  var formdata = new FormData()
  formdata.append('fileupload', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}
// const POSTFileParam2 = (path,param1,param2,file)  => {
//     var formdata = new FormData();
//     formdata.append("fileupload",file);

//     const promise = new Promise((resolve, reject) => {
//         const token = localStorage.getItem('token');
//         axios.post(`${baseURL}${path}/${id}`
//             ,formdata
//             ,{
//                 headers: {
//                     'Content-Type' : 'application/json',
//                     Authorization: `Bearer ${token}`
//                 }
//             },
//         ).then((result)=> {
//             console.log('i am post :',result.data);
//             resolve(result.data);
//         },(err)=>{
//             console.log('config errer',err.response.status);
//             resolve(err.response.status);

//         })
//     })
//     return promise;
// }

const POSTForm = (path, form) => {
  // var formdata = new FormData();
  // formdata.append("fileupload",file);

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, form, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFormConfig = (path, form, conf) => {
  // var formdata = new FormData();
  // formdata.append("fileupload",file);

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, form, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        ...conf,
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFileParam = (path, param1, file) => {
  var formdata = new FormData()
  formdata.append('fileupload', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param1}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}
const POSTFileParam3 = (path, param1, param2, param3, file) => {
  var formdata = new FormData()
  formdata.append('fileupload', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param1}/${param2}/${param3}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}
const POSTFileParam4 = (path, param1, param2, param3, param4, file) => {
  var formdata = new FormData()
  formdata.append('fileupload', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param1}/${param2}/${param3}/${param4}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFileParam3New = (path, param1, param2, param3, filename, file) => {
  var formdata = new FormData()
  formdata.append('filename', filename)
  formdata.append('fileUpload', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param1}/${param2}/${param3}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFiled = (path, file) => {
  var formdata = new FormData()
  formdata.append('fileupload', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config', headers)
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}

const POSTFileNew = (path, file, transId, atpCategoryId, workpackageid) => {
  var formdata = new FormData()
  formdata.append('fileUpload', file)
  formdata.append('transId', transId)
  formdata.append('atpCategoryId', atpCategoryId)
  formdata.append('remarks', 'Upload FIle')
  formdata.append('workpackageId', workpackageid)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFileBoqAttachment = (path, file, workpackageid, UploadedBy, remarks) => {
  var formdata = new FormData()
  formdata.append('File', file)
  formdata.append('workpackageId', workpackageid)
  formdata.append('UploadedBy', UploadedBy)
  formdata.append('UploadedBy', UploadedBy)
  formdata.append('remarks', remarks)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFileCico = (
  path,
  workpackageid,
  userId,
  activityId,
  poCategory,
  longitude,
  latitude,
  teamNameOnsite,
  file,
) => {
  var formdata = new FormData()
  formdata.append('workpackageid', workpackageid)
  formdata.append('userId', userId)
  formdata.append('activityId', activityId)
  formdata.append('poCategory', poCategory)
  formdata.append('longitude', longitude)
  formdata.append('latitude', latitude)
  formdata.append('teamNameOnsite', teamNameOnsite)
  formdata.append('photoFile', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFileNew2 = (path, file, transId, remarks, workpackageid) => {
  var formdata = new FormData()
  formdata.append('fileUpload', file)
  formdata.append('transId', transId)
  formdata.append('remarks', remarks)
  formdata.append('workpackageId', workpackageid)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFileNew3 = (path, file, tpSiteDocId, transProccesId, workpackageid, docName) => {
  // const dispatch = useDispatch()
  var formdata = new FormData()
  formdata.append('fileUpload', file)
  formdata.append('tpSiteDocId', tpSiteDocId)
  formdata.append('transProccesId', transProccesId)
  formdata.append('workpackageId', workpackageid)
  formdata.append('docName', docName)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    // const dispatch = useDispatch()
    const [progress, setProgress] = useState(null)

    axios
      .post(`${baseURL}${path}`, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },

        onUploadProgress: (data) => {
          const percentCompleted = Math.round((data.loaded * 100) / data.total)
          console.log(percentCompleted, 'upload data')
          setProgress(percentCompleted)
          //  useDispatch(setUploadProgress(percentCompleted))
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
          // useDispatch(setUploadProgress(result))
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}
const POSTFileNew4 = (path, file, workpackageid, isRevise) => {
  var formdata = new FormData()
  formdata.append('fileUpload', file)

  formdata.append('wpid', workpackageid)
  formdata.append('isRevise', isRevise)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFileNewArray = (path, file, transId, atpCategoryId, workpackageid) => {
  var formdata = new FormData()
  var rs
  file.forEach((files) => {
    formdata.append('files[]', files)

    formdata.append('transId', transId)
    formdata.append('atpCategoryId', atpCategoryId)
    formdata.append('remarks', 'test remarks via upload')
    formdata.append('workpackageId', workpackageid)

    const promise = new Promise((resolve, reject) => {
      const token = localStorage.getItem('token')
      axios
        .post(`${baseURL}${path}`, formdata, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (result) => {
            console.log('i am post :', result.data)
            resolve(result.data)
          },
          (err) => {
            console.log('config errer', err.response.status)
            resolve(err.response.status)
          },
        )
    })

    rs = promise
  })
  return rs
}

const POSTFileAddhoc = (path, file, adhocDocId, docName, LMBY) => {
  var formdata = new FormData()
  formdata.append('File', file)

  formdata.append('adhocDocId', adhocDocId)
  formdata.append('docName', docName)
  formdata.append('docName', 'test remarks via upload')
  formdata.append('LMBY', LMBY)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config errer', err.response.status)
          resolve(err.response.status)
        },
      )
  })
  return promise
}

const POSTFileParam1 = (path, file, param1) => {
  var formdata = new FormData()
  formdata.append('fileupload', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param1}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config', headers)
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}
const POSTFileParam2 = (path, param1, param2, file) => {
  var formdata = new FormData()
  formdata.append('fileupload', file)

  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}${path}/${param1}/${param2}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am post :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log('config', headers)
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}

const PUTFile = (path, id) => {
  var formdata = new FormData()
  // formdata.append("fileupload",file);
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .put(`${baseURL}${path}/${id}`, formdata, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am PUTFILE :', result.data)
          resolve(result.data)
        },
        (err) => {
          toast.error(err)
          reject(err)
        },
      )
  })
  return promise
}

const PUT = (path, body) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .put(`${baseURL}${path}`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am put :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log(err)
          reject(err)
        },
      )
  })
  return promise
}

const PUTParam = (path, body, id) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .put(`${baseURL}${path}/${id}`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am get :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log(config)
          reject(err)
        },
      )
  })
  return promise
}
const PUTParam2 = (path, body, param1, param2) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .put(`${baseURL}${path}/${param1}/${param2}`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am get :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log(config)
          reject(err)
        },
      )
  })
  return promise
}

const DELETE = (path, param) => {
  const promise = new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    axios
      .delete(`${baseURL}${path}/${param}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (result) => {
          console.log('i am put :', result.data)
          resolve(result.data)
        },
        (err) => {
          console.log(config)
          reject(err)
        },
      )
  })
  return promise
}

const DELETEParam = (path, body, param) => {
  console.log(param, 'paramdelete')
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${baseURL}${path}/${param}`, body, { headers }).then(
      (result) => {
        console.log('i am post :', result.data)
        resolve(result.data)
      },
      (err) => {
        console.log('config', headers)
        toast.error(err)
        reject(err)
      },
    )
  })
  return promise
}

const getIdentity = () => GET('me')

const getMenu = (id, tokens) => GetMenu('menu', id, tokens)
const getDashboardRole = (userid) => GETParam('dashboard/dashboardbyroleid', userid)
const changePassword = (body) => PUT('user/userChangePassword', body)
const insertUserDispatcher = (body) => POST('user/userInsert', body)
// const registerMenu = (body) => POST('',body)
const getIngridients = (id) => GETParam('api/Menu/setupmenuing', id)

const postIngridients = (body) => POST('api/Menu/InsertMenuIng', body)
const deleteMenuIng = (menuingid) => DELETEParam('api/Menu/deletemenuing', '', menuingid)
const saveMenu = (body) => POST('api/menu/savemenu', body)
const getMenuListByUserId = (userId) => GETParam('api/menu/menubyuserid', userId)
const getMenuListByUserIdNP = (userId) => GETParam('api/menu/menubyuseridnp', userId)
const getMenuListAll = () => GET('api/menu/getmenuall')
const getMenuListByStatus = (status) => GETParam('api/menu/getmenubystatus', status)
const getMenuDetailById = (menuId) => GETParam('api/Menu/menudetail', menuId)

const getMemberByUserId = (userId) => GETParam('api/member/getmemberbyuserid', userId)
const registerMember = (body) => POST('api/member/registermember', body)
const updateStatus = (body) => PUT('api/member/updatestatus', body)
const rejectUserSub = (body) => POST('api/UserSubs/rejectsubsuser', body)

const getRegisteredUser = () => GET('api/usersubs/getregisteruser')
const getRegisteredUserPagination = (body) => POST('api/usersubs/getregisteruserpagination', body)
const getMasterPeriod = () => GET('api/usersubs/getmasterperiod')
const getMasterPeriodAll = () => GET('api/usersubs/getmasterperiodall')
const postUpdateStatUser = (body) => POST('api/usersubs/updatestatususer', body)
const insertMasterPeriod = (body) => POST('api/UserSubs/InsertSubscriptionPeriod', body)
const updateMasterPeriod = (body) => PUT('api/UserSubs/UpdateSubscriptionPeriod', body)

const registerUser = (body) => POST('api/auth/registeruser', body)
const getAPIKey = (body) => POST('api/Auth/GetAPIKey', body)

const getMasterBank = (isActive) => GETParam('api/bankaccount', isActive)
const getMasterBankNew = (isActive) => GETParam('api/bankaccount/getbanklist', isActive)
const getBankDetail = (bankid) => GETParam('api/Bankaccount/getdetailbank', bankid)
const getBankListAll = () => GET('api/BankAccount/getbanklistall')
const updateBankStatus = (body) => PUT('api/BankAccount/UpdateBankAccountStatus', body)

const getSubsPeriodDetail = (id) => GETParam('api/usersubs/getperioddetail', id)
const getUserDetail = (id) => GETParam('api/Auth/getuserdetail/getuserdetail', id)
const updateSubsRegister = (body) => POST('api/Auth/UpdateSubsId', body)
const getPendingPaymentByUserId = (userid) =>
  GETParam('api/Auth/GetPendingPayment/getpendingpayment', userid)
const getPendingPaymentByEmail = (email) =>
  GETParam('api/Auth/GetPendingPaymentByEmail/getpendingpaymentByEmail', email)

const getTipsandTricks = () => GET('api/TipsTricks/gettipsandtrickall')
const getMenuNoPhoto = () => GET('api/Menu/getmenuallnp')
const getTipsandTricksVideo = (tipsId) => GETParam('api/TipsTricks/gettipsandtrickvideo', tipsId)
const getTipsandTricksByStatus = (stat) => GETParam('api/TipsTricks/gettipsandtrickbystatus', stat)
const getTipsandTricksByUserId = (userId) =>
  GETParam('api/TipsTricks/gettipsandtricksbyuserid', userId)
const getTipsandTricksDetail = (tipstrickid) =>
  GETParam('api/TipsTricks/gettipsandtricksdetail', tipstrickid)
const gettipsandtrickpagination = (body) => POST('api/TipsTricks/gettipsandtrickall', body)
// const getTipsandTricksByUserId = (userId)=>GETParam("api/TipsTricks/gettipsandtricksbyuserid",userId)

const getMenuDelegationByUserId = (userId) => GETParam('api/Menu/getmenudelegationbyuserid', userId)
const getMenuDelegationByMemberId = (memberId) =>
  GETParam('api/Menu/getmenudelegationbymemberid', memberId)
// const insertMenuDelegation = (body)=>POSTParam("api/Menu/InsertMenuDelegation",body)
const getUserSummary = (userId) => GETParam('api/Auth/GetSummaryUser/getsummaryuser', userId)

const insertMenuDelegation = (body) => POST('api/Menu/InsertMenuDelegation', body)
const updateMenuDelegation = (body) => PUT('api/Menu/UpdateMenuDelegation', body)

const updateUserdata = (body) => POST('api/Auth/UpdateUserProfile', body)
const getMenuPagination = (body) => POST('api/Menu/getmenupagination', body)
const updateMenuStatus = (body) => PUT('api/Menu/updatemenustatus', body)
const updateMenuDescription = (body) => PUT('api/Menu/updatemenudescription', body)
const updateMenuNote = (body) => PUT('api/Menu/updatemenunote', body)
const getMasterBankName = () => GET('api/MasterBank/getmasterbank')
const getBankUser = (userid) => GETParam('api/BankAccountUser/GetBankAccountUser', userid)
const updateBankUser = (body) => POST('api/BankAccountUser/updateBankAccount', body)

const getIngredientsPagination = (body) =>
  POST('api/MasterIngredients/getingredientspagination', body)
const insertIngredients = (body) => POST('api/MasterIngredients/insertmasteringredients', body)
const updateIngredients = (body) => POST('api/MasterIngredients/updatestatusingredients', body)

// Content management Services
const getAllContent = () => GET('api/ContentManagementMaster/getcontentall')
const getContentByTitle = (title) => GETParam('api/ContentManagementMaster/getcontentbypage', title)
const updateContent = (body) =>
  PUT('api/ContentManagementMaster/updateContentManagementMaster', body)
const getMemberByUserIdWithMobileId = (userId) => GETParam('api/member/membermobile', userId)

// Master Category Ingredients
const getAllIngredients = () => GET('api/MasterIngridientCategory/getallcategoryingridient')
const postAllIngredients = (body) =>
  POST('api/MasterIngridientCategory/insertingridientcategory', body)
const updateAllIngredients = (body) =>
  PUT('api/MasterIngridientCategory/updateingridientcategory', body)
const getAllIngredientsbyStatus = (body) =>
  POST('api/MasterIngredientsCategory/getingredientscategory', body)

const getDateRangeMenu = (body) => POST('api/BucketIngredients/getbucketingredients', body)

const insertAddShopingCart = (body) => POST('api/BucketIngredients/addmenutoshopingcart', body)
const getShopingCart = (uid) => GETParam('api/BucketIngredients/getshopingcartbyuserid', uid)
const updateShopingChart = (body) => PUT('api/BucketIngredients/updatequantityshopingcart', body)
const getmenuCategory = (body) => POST('api/Menu/getmenuwithcategory', body)
const postOTPValidation = (body) => POST('api/Auth/ValidateOTP', body)
const getAllIngredientsByMenuList = (body) =>
  POST('api/BucketIngredients/getallingredientsbymenulist', body)
const getGroceriesByStatus = (status) => GETParam('api/Grocery/GetGrocery', status)
const insertGroceries = (body) => POST('api/Grocery/InsertGrocery', body)
const updateGroceries = (body) => PUT('api/Grocery/UpdateGrocery', body)

const API = {
  getGroceriesByStatus,
  insertGroceries,
  updateGroceries,
  getAllIngredientsByMenuList,
  postOTPValidation,
  getMasterPeriodAll,
  getAPIKey,
  updateBankStatus,
  getShopingCart,
  getmenuCategory,
  getAllIngredientsbyStatus,
  updateShopingChart,
  getBankListAll,
  insertMasterPeriod,
  getAllIngredients,
  insertAddShopingCart,
  getDateRangeMenu,
  postAllIngredients,
  updateAllIngredients,
  getMasterBankNew,
  getContentByTitle,
  updateMenuDelegation,
  getMemberByUserIdWithMobileId,
  insertIngredients,
  updateIngredients,
  getAllContent,
  getIngredientsPagination,
  updateContent,
  updateMenuStatus,
  updateMenuDescription,
  updateMasterPeriod,
  updateMenuNote,
  gettipsandtrickpagination,
  updateBankUser,
  getBankUser,
  getMasterBankName,
  getRegisteredUserPagination,
  getMenuPagination,
  getMenuListByUserIdNP,
  updateUserdata,
  getUserSummary,
  getPendingPaymentByEmail,
  getMenuDetailById,
  insertMenuDelegation,
  getMenuDelegationByMemberId,
  getMenuDelegationByUserId,
  getTipsandTricksDetail,
  getMenuNoPhoto,
  getTipsandTricks,
  getTipsandTricksVideo,
  getTipsandTricksByStatus,
  getTipsandTricksByUserId,
  rejectUserSub,
  getMenuListByStatus,
  getMenuListAll,
  getPendingPaymentByUserId,
  updateSubsRegister,
  getUserDetail,
  getSubsPeriodDetail,
  getMasterBank,
  getBankDetail,
  registerUser,
  getMasterPeriod,
  postUpdateStatUser,
  getRegisteredUser,
  getMemberByUserId,
  registerMember,
  updateStatus,
  getMenuListByUserId,
  saveMenu,
  deleteMenuIng,
  postIngridients,
  getIngridients,
  insertUserDispatcher,
  Login,
}

export default API
