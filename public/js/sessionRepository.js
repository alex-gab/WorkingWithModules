const sessionURI = 'sessions.json';
let sessionList = [];

function getSessions() {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionList = e.target.response;
            resolve(sessionList);
        };
        oReq.open('GET', sessionURI, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

export {getSessions}