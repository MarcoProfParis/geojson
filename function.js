window.function = async function(fetchUrl,json) {
    if (fetchUrl.value === undefined) return "En attente ...";
let obj = JSON.parse(json.value);
    console.log("Value of json.check:", obj.check);
if (obj.check === false) return "Waiting for check";
    let url = obj.fetchUrl;
    console.log("Value of obj.fetchUrl:", obj.fetchUrl);
    
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'
    };
const response = await fetch(fetchUrl.value, requestOptions);
const data = await response.text();

        return data; 
