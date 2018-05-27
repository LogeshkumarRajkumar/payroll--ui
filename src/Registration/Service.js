import axios from 'axios';

const postRequest = (data, password) => {
    var response = {
        successMessage: '',
        errorMessages: {}
    }
    axios.defaults.withCredentials = true;
    return axios.post('http://127.0.0.1:8000/users/', {
      headers: {
        'Content-Type': 'application/json',
      },
      name: data.company_name,
      creator: {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        password: password
      }
    })
    .then(response => {
        response.successMessage = "Verification Successfull";
        return response;
    })
    .catch(err => {
        response.errorMessages['name']=err.response.data.name;
        response.errorMessages['first_name']=err.response.data.creator.first_name;
        response.errorMessages['last_name']=err.response.data.creator.last_name;
        response.errorMessages['email']=err.response.data.creator.email;
        response.errorMessages['password']=err.response.data.creator.password;
        console.log('sss',err.response.data);
        return response;
    });
};

export { postRequest }