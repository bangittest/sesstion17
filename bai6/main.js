let players = {
    name: "Messi",
    age: 30,
    nation: "Argentine",
    club: "PSG",
};
players.email = "messi@gmail.com";
console.log(players);

/*
{
  name: "Messi",
  age: 30,
  nation: "Argentina",
  club: "PSG",
  email: "messi@gmail.com",
};
*/
players.club = "Barcelone";
for (const key in players) {
    console.log(`${key}: ${players[key]}`);
};
/*
name: "Messi"
age: 30,
nation: Argentina
club: Barcelone
email: messi@gmail.com
*/
delete players.age;
console.log(players);

/*
{
  name: "Messi",
  age: 30,
  nation: "Argentina",
  club : "PSG",
};
*/
