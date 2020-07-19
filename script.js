
//API key: 98edebaa-a6fb-4fe5-b876-e0d9e18f1bbe

const api_url="https://api.thecatapi.com/v1/images/search";

let img_src;

const sendHTTPRequest = (method, url) =>{
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url); //prepares a GET request package

        xhr.responseType = 'json'; //parses JSON into readable JS object
        xhr.onload = () =>{
            resolve(xhr.response);
        }

        xhr.send(); //sends the package
    });
    return promise
    
};



const getImages = () =>{
    sendHTTPRequest('GET', api_url).then(response =>{
        getImgLink(response[0].url)
    });  
};

getImages();

function getImgLink(img_src){
    $("#img").attr("src",img_src);
};

document.getElementById("btn").addEventListener("click", function(){
    getImages();
    //jsonResponse();
});

/*
function jsonResponse(){
$.getJSON(api_url, function(data){
    //console.log(data);
    //console.log(data[0].id);
    img_src = data[0].url;
    getImgLink(img_src);
})};
*/

//jsonResponse();
