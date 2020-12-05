var π= 3.14;
function calcCircumference(){
    var r= (document.getElementById('radius').value);
    let circumference = document.getElementById("circumference").innerHTML= 2 *π *r;
    return circumference;
}
