window.function = async function(fetchUrl,json) {
    if (fetchUrl.value === undefined) return "En attente ...";
let obj = JSON.parse(json.value);
    console.log("Value of json.check:", obj.check);
if (obj.check === false) return "Waiting for check";
    let url = obj.fetchUrl;
    console.log("Value of obj.fetchUrl:", obj.fetchUrl);
    const requestBody = json;

    // Append the password as a query parameter to the fetchUrl URL
    // fetchUrl += `?pwd=${encodeURIComponent(json.pwd)}`;
    // Check if fetchUrl is a valid URL and if check is true
    


    console.log("Value of fetchUrl:", fetchUrl.value);
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'
    };
const response = await fetch(fetchUrl.value, requestOptions);
const data = await response.text();

        return data; 
