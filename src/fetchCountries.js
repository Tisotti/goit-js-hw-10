const URL = "https://restcountries.com/v3.1"


export default function fetchCountries(name) {

    return fetch(`${URL}/name/${name}?fields=name,capital,population,flags,languages`)

        .then(response => {
            if (!response.ok) {
                const err = new Error();
                err.code = response.status;
                throw err;
            } return response.json()
        })

};