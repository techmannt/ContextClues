$(document).ready(function () {

  var friends = ["Bill", "Ruth", "John", "Kathy", "Mike"];
  var locations = ["copy room", "library", "furnace room", "basement", "wine cellar", "master bedroom", "guest bedroom", "bathroom", "foyer", "dungeon"];
  var weapons = ["harpoon", "stapler", "frying pan", "lamp", "vacuum cleaner", "brick", "butcher knife", "violin", "piano", "flower pot", "pillow", "cello", "laptop computer", "desktop computer", "scarf", "chain", "scissors", "machete", "office chair", "dagger"];
  var accusation = [];

  for (var i = 1; i < 101; i++) {
    $('body').append('<h3 id="' + i + '">Accusation ' + i + '</h3>');

    var friendIndex = friends[i % 5];
    var locationIndex = locations[i % 10];
    var weaponsIndex = weapons[i % 20];
    accusation.push({ friend: friendIndex, location: locationIndex, weapon: weaponsIndex });  // Create an array of objects so the correct friend, weapon, and location can be printed out in the alert later.

  }

  var myAccusation = createAccusation();

  function createAccusation() {
    return $('h3').click(function (e) {
      alert('Accusation ' + e.target.id + ': I accuse ' + accusation[e.target.id - 1].friend + ', with the ' + accusation[e.target.id - 1].weapon + ' in the ' + accusation[e.target.id - 1].location + '!');
      // e.target.id - 1 is used above since the array is 0 indexed. We don't want to cause an error when "Accusation 100" is clicked!
    })
  }
})
