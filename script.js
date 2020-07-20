
//API key: 98edebaa-a6fb-4fe5-b876-e0d9e18f1bbe

const api_url="https://api.thecatapi.com/v1/images/search";
const vote_url="https://api.thecatapi.com/v1/votes";

const apiKey = '98edebaa-a6fb-4fe5-b876-e0d9e18f1bbe';

let img_src;
let img_id;
let vote_id;

const sendHTTPRequest = (method, url, data) =>{
    const promise = new Promise((resolve,reject) =>{

        const xhr = new XMLHttpRequest();

        xhr.open(method, url); //prepares a GET request package

        xhr.responseType = 'json'; //parses JSON into readable JS object

        if(data){
            xhr.setRequestHeader('Content-Type', 'application/json'); //to make data into JSON for server
        }
        xhr.onload = () =>{
            resolve(xhr.response);
        }

        xhr.setRequestHeader('x-api-key', apiKey);
        xhr.send(JSON.stringify(data)); //sends the package

    });

    return promise
    
};


const voteUp = () =>{
    console.log($('img').attr('id'));
    sendHTTPRequest('POST', 'https://api.thecatapi.com/v1/votes', {'image_id': $('img').attr('id'), 'value': 1 })
    getVotes();
}

const voteDown = () =>{
    console.log($('img').attr('id'));
    sendHTTPRequest('POST', 'https://api.thecatapi.com/v1/votes', {'image_id': $('img').attr('id'), 'value': 0 })
    getVotes();
}

const getVotes = () =>{
    sendHTTPRequest('GET', vote_url).then(response =>{
        console.log(response);
    });
}

const getImages = () =>{
    sendHTTPRequest('GET', api_url).then(response =>{
        console.log(response);
        getImgLink(response[0].url)
        getImgID(response[0].id)
    });  
};

getImages();

function getImgLink(img_src){
    $("img").attr("src",img_src);
};

function getImgID(img_id){
    $("img").attr("id",img_id);
};

$("#btn").click(function(){
    getImages();
    //jsonResponse();
});

$("#green-btn").click(function(){
    voteUp();
    getImages();
});

$("#red-btn").click(function(){
    voteDown();
    getImages();
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
