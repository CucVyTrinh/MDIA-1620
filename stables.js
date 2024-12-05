// // Welcome!

// //                                -.
// |  \
// |   \
// F    L
// |"-._         F    L
// |  `.`--.     L    |
// J    `.  `.   |    |   __
// \     `.  `. J    |.-'_.-
// \      `.  \ \.-     `-. 
// J".           `.      \  >'          `.
// |  \            `-.    L/       `---.._\
// J   L              `"-/               |
// \  |                J        / .-.   4
// J F                |       | / d8   |
// L\                F         | 8P   J
// J L               |         `-'     `-.
// | |                L  .          .-    )
// | J                |   \        . dP  / 
// J  \               |    `.       `-.-"
// \  >-""""-.      .F      >"--.---._) 
// >"        ""--""        |
// J                        F
// |                        L
// J                        |
// \        L         `.   J
// )       | % |      | eJ" u+L
// d"      d"  '|     :Fd"     4
// P      u$"b.  $r    $*L u@".  F
// $  ?F"" 4L ^F""$   F      zP $
// 4F  N    *. %. ^  4     $#  zF
// #r ".    $  $ $  $   $$F :"
// -F  $    ^k Jr@F $   $$$"
// #. F     9$$$9  4
// '$$$          $  *
// VK            ^"          3ed$.
// $$$#
//


let horses = [];


let visitorMessage = "Welcome to Vy's stable! Enjoy meeting my horses.";


let latePaymentFee = 50;


let availableStalls = 10;

//------------------------- First day -------------------------//

function horse(
    name,
    nickname,
    favoriteTreat,
    age,
    monthlyRent,
    isOutside,
    isInside,
    canSing,
    color
) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isOutside = isOutside;
    this.isinside = isInside
    this.canSing = canSing;
    this.color = color;

   
    this.horseIntro = function horseIntro() {
        console.log(
            `This is ${this.name}, also known as ${this.nickname}. She is ${this.age} years old and she love ${this.favoriteTreat}.`
        );
    };

   
    this.checkCanSing = function checkCanSing() {
        console.log(
            `${this.name} loves to sing!` | `${this.name} doesn't sing much.`
        );
    };
}


horses = [
    new horse("Phuong", "Du", "pho", 9, 500, true, true, "pink"),
    new horse("Moon", "Xam", "bun bo", 8, 450, false, false, "black"),
    new horse("Vinh", "Yeu", "xi mai", 7, 400, true, true, "red"),
];


let newHorse = {
    name: "Thang",
    nickname: "Ngua",
    favoriteTreat: "Cuc",
    age: 6,
    monthlyRent: 350,
    isOutside: false,
    canSing: false,
    color: "blue",
};
horses.push(newHorse);


horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;
horses[3].isHungry = false;

//------------------------- Stable roster -------------------------//


// [
//     horse {
//       name: 'Phuong',
//       nickname: 'Du',
//       favoriteTreat: 'apples',
//       age: 6,
//       monthlyRent: 500,
//       isOutside: true,
//       canSing: true,
//       color: "pink",
//       isHungry: true,
//     },
//     horse {
//       name: 'Moon',
//       nickname: 'Xam',
//       favoriteTreat: 'carrots',
//       age: 8,
//       monthlyRent: 450,
//       isOutside: false,
//       canSing: false,
//       color: "black",
//       isHungry: fakse,
//     },
//     horse {
//       name: 'Vinh',
//       nickname: 'Yeu',
//       favoriteTreat: 'xi mai',
//       age: 7,
//       monthlyRent: 400,
//       isOutside: true,
//       canSing: true,
//       color: "red",
//       isHungry: true,
//     },
//     {
//       name: 'Thang',
//       nickname: 'Ngua',
//       favoriteTreat: 'Cuc',
//       age: 6,
//       monthlyRent: 350,
//       isOutside: false,
//       canSing: false,
//       color: "blue",
//       isHungry: false,
//     }
// ]

//---------------------- Growing business ----------------------//



let newStallAvailibility = 10 - 4;
if (availableStalls <= 2) {
    console.log("We need to build more stalls");
} else {
    console.log(`We have ${newStallAvailibility} available!`);
};




function calculateLateRent(horse, lateFee) {
    const totalDue = horse.monthlyRent + lateFee;
    console.log(`${horse.name} will owe $${totalDue} if rent is paid late.`);
}
horses.forEach(horse => calculateLateRent(horse, latePaymentFee));



function likesTreat(horseVar) {
    let treat = horses[2]["favoriteTreat"];  // Use the treat of the third horse
    for (let i = 0; i < horseVar.length; i++) {
        if (horseVar[i]["favoriteTreat"] === treat) {
            return `${horseVar[i]["name"]} likes ${treat}`;
        } else {
            console.log(`${horseVar[i]["name"]} does not like ${treat}.`);
        }
    }
}


console.log(likesTreat(horses));


function findNickname(horseName) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i]["name"] === horseName) {
            return `${horseName}'s nickname is ${horses[i]["nickname"]}`;
        }
    }
    return `Horse named ${horseName} not found`;
}


console.log(findNickname("Phuong"));

//------------------------- Day to day operations -------------------------//


function checkHorsesCanSing(horseVar) {
    for (let i = 0; i < horseVar.length; i++) {
        if (horseVar[i].canSing) {
            console.log(`${horseVar[i].name} can sing!`);
        } else {
            console.log(`${horseVar[i].name} cannot sing.`);
        }
    }
}

checkHorsesCanSing(horses);


function horseGoOut (horseVar){
    for(let i = 0; i < horseVar.length; i++){
        if(horseVar[i]["isInside"] === true){
            horseVar[i]["isInside"] = false;
        }
    }
    console.log(`All horses have been moved outside to spend time in the sun`)
};

horseGoOut(horses);



horses[3].horseGoInside = function (){
    if(this.isInside == false){
        return this.isInside = true;
    } 
};



function feedHorses (horseVar){
    for(let i = 0; i < horseVar.length; i++){
        if (horseVar[i].isInside === false){
            horseVar[i].isInside = true;
        }
        console.log(`${horseVar[i].name} is inside eating her favorite treat, which is ${horseVar[i].favoriteTreat}`);
    };
};
feedHorses(horses);


function moveHorseDark (horseVar){
    for(let i = 0; i < horseVar.length; i++){
        if(horseVar[i].isInside === false){
            horseVar[i].isInside = true;
        };
        console.log(`${horseVar[i].name} come inside it's getting dark outside`);
    };
};
moveHorseDark(horses);




