import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_TGpj5Rd2pXHbFQi1O9BYC9FR6bq4P0MvQlOpCH86h7MLOrr97IJcc9O0KWWFnKVW"
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
    return axios.get('/breeds')
        .then(function (response) {
        if (response.status >= 400) {
            throw new Error (response.statusText || "Something went wrong!")
        }
        return response;
    })
}
function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`)
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error(response.statusText || "Something went wrong!")
            }
            return response;
        })  
}
export { fetchBreeds, fetchCatByBreed }