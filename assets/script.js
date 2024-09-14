const apikey = 'live_8cSlOLFEx0cfoXuSmjkPBv1z3SwaxV9IIpuEQr8XMFqmnZbEGSw78CHGRdMWkBnD';
const apiURL = 'https://api.thecatapi.com/v1/images/search';

fetch(apiURL, {
    headers: {
        'x-api-key': apiKey
    }
})

.then(response => response.json()) //response is the response object returned by fetch request
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});