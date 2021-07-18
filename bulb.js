let pic;
function bulb(val){
    if(val==1){
        pic="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg";
    }
    else{
        pic="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
    }
    document.getElementById('bulb').src=pic;
}