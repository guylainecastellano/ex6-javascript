function clickFunction(){
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var result = (shoeSize * 2) + 5;
result *= 50; //ou result = result *50
result -= yearOfBirth;
result += 1770;
alert(result);
};
