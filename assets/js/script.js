function clickfunction(){
  var ShoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var result = (ShoeSize * 2) + 5;
  var result = result * 50;
  var result = result - yearOfBirth;
  var result = result + 1770;
  alert(result);
}
