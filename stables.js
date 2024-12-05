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






//-----------------------------------------------Question 23--------------------------------------------------------------------
/*
You are the owner of a lovely snowglobe store, and today you have a big sale and customers waiting outside.

1) You need to register the age of each customer in line outside, preferrably in an array.
2) Your store has a "setting" object that keeps track of whether there are breakable items inside.
2) If there are breakable items in the store, only customers over the age of 10 are allowed inside. Create a function that handles the following situations:
- If there are breakable items, all your customers over the age of 10 should get a message logging out "Please come in!". 
Every customer under 10 should get a message logging "Please wait in line!".
- If there are no breakable itmes, console log "Everyone, come inside!".
3) Challenge: Add a setting for the age requirement to enter. By default, it should be 10, but you should be able 
to change it by invoking a function that accepts the new entry age as an argument. This also means that the age for
 the notification needs to be updated to match the new entry requirements.
*/


let customerAges = [9, 8, 17, 29, 28, 27, 26];

let storeSettings = {
  breakableItemsInside: true, 
  defaultAge: 10,
};


function manageCustomerEntry(customers, settings) {
  if (settings.breakableItemsInside) {
    customers.forEach(age => {
      if (age >= settings.defaultAge) {
        console.log("Please come in!");
      } else {
        console.log("Please wait in line!");
      }
    });
  } else {
    // If there are no breakable items, everyone can come in
    console.log("Everyone, come inside!");
  }
}

manageCustomerEntry(customerAges, storeSettings);


function setDefaultAge(newAge) {
  storeSettings.defaultAge = newAge;
  console.log(`The entry age requirement is now ${newAge}.`);
}

setDefaultAge(12); 




/*
Create a simple task management system that will track tasks in different categories: "personal", "work", "urgent", "completed", and "archived". By default, each category starts with 0 tasks. 
The application should allow the user to:

1) Invoke a function that allows them to add a task to their chosen category by passing in the category name. This will increment the task count for that category by 1.
2) Invoke a function that logs each category and the number of tasks in it.
3) Challenge: Invoke a function that calculates the total number of tasks across all categories. Based on the number of tasks, log out a message:
- Less than 5 tasks: "light workload"
- Between 5 and 15 tasks: "moderate workload"
- Between 15 and 25 tasks: "heavy workload"
- More than 25 tasks: "overloaded"
*/
// 1) Initialize the task categories
let taskCategories = {
  personal: 0,
  work: 0,
  urgent: 0,
  completed: 0,
  archived: 0
};
/*3) This is my thoughts: 
function calculateWorkload() {
  let totalTasks = 0;
  if (totalTasks < 5) {
    console.log("Light workload");
  } else if (totalTasks >= 5 && totalTasks <= 15) {
    console.log("Moderate workload");
  } else if (totalTasks > 15 && totalTasks <= 25) {
    console.log("Heavy workload");
  } else {
    console.log("Overloaded");
  }
}
*/

