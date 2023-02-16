// ITERATION 1

// Suspects Array
const mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
};
const drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology.Adopted daughter of Mr.Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
};
const profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/",
    color: "purple",
};
const missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
};
const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
};
const mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
};

const suspectsArray = [];
suspectsArray.push(mrGreen);
suspectsArray.push(drOrchid);
suspectsArray.push(profPlum);
suspectsArray.push(missScarlet);
suspectsArray.push(mrsPeacock);
suspectsArray.push(mrMustard);

console.log(suspectsArray);

// Rooms Array

const roomsArray = [
    {name: "Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"},
];
console.log(roomsArray)
// Weapons Array

const weaponsArray = [
{name: "rope", weight: 10},
{name: "candlestick", weight: 2},
{name: "dumbbell", weight: 30},
{name: "poison", weight: 2},
{name: "axe", weight: 15},
{name: "bat", weight: 13},
{name: "trophy", weight: 25},
{name: "pistol", weight: 20},
];
console.log(weaponsArray);

// ITERATION 2

function selectRandom(suspectsArray) {
    const randomIndex = Math.floor(Math.random()*suspectsArray.length)
    return suspectsArray[randomIndex];
}
function selectRandom(roomsArray) {
    const randomIndex = Math.floor(Math.random()*roomsArray.length)
    return roomsArray[randomIndex];
}
function selectRandom(weaponsArray) {
    const randomIndex = Math.floor(Math.random()*weaponsArray.length)
    return weaponsArray[randomIndex];
}
console.log(selectRandom(suspectsArray))

function pickMystery() {
    const result1 =  selectRandom(suspectsArray);
    const result2 =  selectRandom(roomsArray);
    const result3 =  selectRandom(weaponsArray);

    return [result1, result2, result3]
}

const results = pickMystery();
console.log(results)


// ITERATION 3

const envelope = pickMystery();
console.log(envelope);


function revealMystery(envelope) {
    let result = "";
    for (let i = 0; i < envelope.length; i++){
        const item = envelope[i];
        result += `${envelope[0].firstName} ${envelope[0].lastName} killed Mr. Boddy using the ${envelope[2].weapon.name} in the ${envelope[1].name}`;
    }
    return result;
}

const resulterer = revealMystery();
console.log(resulterer);