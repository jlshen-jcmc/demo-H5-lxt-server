function getCurrentTime(){
    let date = new Date();

    let year = date.getFullYear();
    let month  = date.getMonth() + 1;
    let day = date.getDay();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return  `${year}-${month}-${day} ${hour}:${min}:${sec}`
}

function getCurrentDate(){
    let date = new Date();

    let year = date.getFullYear();
    let month  = date.getMonth() + 1;
    let day = date.getDay();
    return  `${year}-${month}-${day}`
}

module.exports = {
    getCurrentTime,
    getCurrentDate
}