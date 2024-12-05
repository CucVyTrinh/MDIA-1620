


// My Stable Reaction
//                              .      .----..                                                         
//                          .+#####+##########+.                                                      
//                             +################-                                                     
//                   .-####+.  .#################.                                                    
//                  .#########++#################....                                      ...        
//                  .#################################-                             .--++++++++-      
//          .-+########################################.                    ..--++++++++++++++++###+-.
//       .-#######################+++++++++++++++++####-               .-++++++++++++++++++++++######-
//       -###################++++++++++++++++++++++++++#+.        ..-+++++++++++++++++++++++++######- 
//       .-################++++++++++++++++++++++++++++++-.   .--+++++++++++++++++++++-------#####+.  
//        .##############++++++HYDE+HYDE+HYDE+HYDE+++++++++++-+++++++++++++++++++-.             .-.    
//       .+#############++++++++++++++++++++++++++++++++++++++++++++++++++++++-                       
//     .-###########+##++++++++++++++++++++++++++++++++++++++++++++++++++++++.                        
//   .+#############+###+++++++++++++++++##+++++++++++++++++++++++++++++++++.                         
// .+#####################+++++##+#########+++++++++++++++++++++++++++++++-.                          
//.+#-. .+#################+++++###########++++++++++++++++++++++++++++-.                             
//.+.    .+++++##########+++++++++++#+-+########++++++++++++++++++-..                                 
// ..   .+################++++++++++--++++++++++++++++++++++++++++-                                   
//     -+++###############+++#####++##+++++++++++++++++++++++++++++.                                  
//        +###############++#######++++++#######+++++++++++++++++++.                                  
//       -#######################++++++++#########+++++----++++++++.                                  
//     .------..+###########++++++++++++##########++-------++++++++.                                  
//             .+#######++++++++++++++++++######+++--------++++++++.                                  
//             +#+#+-+++++++++++++###++++++###+++---------+++++++++.                                  
//             -.+-+++++++++++++###+.-++++++++++----------++++++++-.                                  
//                .+++++++++++####++-.+++++++++----------+++++++++.                                   
//                 .++++++++###++++++.-++++++++++++-----+++++++++.               --+-.  .+######+.    
//                   -+++####++###+++.++++++++++++------++++++++.           ..+###################-   
//                      .++++++##+++.-+++++++++--------++++++++-           -#######################-  
//                        .---...   -+++++++++++--------+++++++-          +######################++#- 
//                                 -+++++++++++++++----+++++++++         -######################+. .. 
//                                .-+++++++++++++++++++-++++++++-       .########################+.   
//                                .++++++++++++++++++++++++++++++-      .########################+.   
//                                -++++++++++++++++++++-++++++++++.     .########################-    
//                               .-+++++++++++++++++++---++++++++++-.   -########################+.   
//                              .-+++++++++++++++++++----++++++++++++- -#####################-+##+.   
//                           .-++++++++++++++++++++-------++++++++++++################-. .-##+  .     
//                         -++++++++++++++++++++++++------+++++++++++++#################+.  ..        
//                       .++++++++++++++++++++++++++------+++++++++++++##########-+######-            
//                      .+++++++++++++++++++++++++++++++++++++++++++++++.    .-###+.                  
//                     .++++++++++##+++++++++++++++++++++++++++++++++++-       ....                   
//                    .++++++++++#####+++++++++++++++++++++++++++++++++-                              
//                    -++++++++++#######+++++++++++++++++++++++++++++++-                              
//                   .-++++++++++#########++-+++++++++++++++++++++++++++                              
//                   .++++++++++++#####++-.    .........++++++++++++++++-..                           
//                   .++++++++++++++++++               .-+++++++++++++++++++++-                       
//                   .+++++++++++++++++                 -++++++++++++++++++++++.                      
//                   .+++++++++++++++++                 .++++++++++++++++++++++.                      
//                    .-+++++++++++++++-                 .++++++++++++++++++++-.                      
//                       .-+++++++++++++-                  -++++++++++++++++++-                       
//                           .++++++++++-                    -+++++++-.-++++++                        
//                           -+++++++++-                              .++++++.                        
//                          -++++++++.                                -+++++-                         
//                         -++++++-.                                 .++++++.                         
//                       .+++++++-                                  .-++++++.                         
//                      .+++++++-                                   .+++++++.                         
//                     .++++++++-                                   ++++++++.                         
//                    .++++++++++                                  .++++++++.                         
//                   .+########+.                                 .+#######-.                         
//                  .##########-                                 .+#########.                         
//                 .+##########-                                 -##########.                         
//                 -###########-                                 -##########.                         
//                 .--+++++--.                                     ...--...                           


//------------------------- Seting up shop -------------------------//


let horses;
let visitMessage = "Welcome to Hyde's Stable!";
let lateFee = 150;
let availableStalls = 12;


//------------------------- First day -------------------------//


function StableHorse(name, nickname, favoriteTreat, age, monthlyRent, isInside, color, ponyTails) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.color = color;
    this.ponyTails = ponyTails;
    this.horseIntro = function horseIntro() {
        console.log(`Welcome to our stable, this is ${this.name} but you can call him ${this.nickname}. He is ${this.age} year's old and likes to eat ${this.favoriteTreat}.`);
    };
    this.ponyTailCount = function ponyTailCount() {
        console.log(`${this.name} also has ${this.ponyTails} ${this.color} colored ponytails.`);
    };
};

horses = [
    new StableHorse("Mark", "Momo", "Pickles", 5, 250, true, "Brown", 5),
    new StableHorse("Gilbert", "Gilli", "Pumpkins", 12, 400, false, "Orange", 3),
    new StableHorse("Kabutops", "Kabu", "Truffles", 8, 450, true, "Black", 12),
];

let newHorse = {
    name: "Hugo",
    nickname: "Hue",
    favoriteTreat: "candy",
    age: 6,
    monthlyRent: 370,
    isInside: false,
    color: "Ivory",
    ponyTails: 5,
    horseIntro() {
        console.log(`Welcome to our stable, this is ${this.name} but you can call him ${this.nickname}. He is ${this.age} year's old and likes to eat ${this.favoriteTreat}.`);
    },
    ponyTailCount() {
        console.log(`${this.name} also has ${this.ponyTails} ${this.color} colored ponytails.`);
    },
};

horses.push(newHorse);
horses[0]["isHungry"] = true;
horses[1]["isHungry"] = false;
horses[2]["isHungry"] = false;
horses[3]["isHungry"] = true;


//------------------------- Stable roster -------------------------//


// [
//     StableHorse {
//       name: 'Mark',
//       nickname: 'Momo',
//       favoriteTreat: 'Pickles',
//       age: 5,
//       monthlyRent: 250,
//       isInside: true,
//       color: 'Brown',
//       ponyTails: 5,
//       horseIntro: [Function: horseIntro],
//       ponyTailCount: [Function: ponyTailCount],
//       isHungry: true
//     },
//     StableHorse {
//       name: 'Gilbert',
//       nickname: 'Gilli',
//       favoriteTreat: 'Pumpkins',
//       age: 12,
//       monthlyRent: 400,
//       isInside: false,
//       color: 'Orange',
//       ponyTails: 3,
//       horseIntro: [Function: horseIntro],
//       ponyTailCount: [Function: ponyTailCount],
//       isHungry: false
//     },
//     StableHorse {
//       name: 'Kabutops',
//       nickname: 'Kabu',
//       favoriteTreat: 'Truffles',
//       age: 8,
//       monthlyRent: 450,
//       isInside: true,
//       color: 'Black',
//       ponyTails: 12,
//       horseIntro: [Function: horseIntro],
//       ponyTailCount: [Function: ponyTailCount],
//       isHungry: false
//     },
//     {
//       name: 'Hugo',
//       nickname: 'Hue',
//       favoriteTreat: 'candy',
//       age: 6,
//       monthlyRent: 370,
//       isInside: false,
//       color: 'Ivory',
//       ponyTails: 5,
//       horseIntro: [Function: horseIntro],
//       ponyTailCount: [Function: ponyTailCount],
//       isHungry: true
//     }
// ]


//---------------------- Growing business ----------------------//


function stallAvailibility(horseVar){
    availableStalls = availableStalls - horseVar.length;
    if (availableStalls <= 2){
        return (`We need to build more stalls!`);
    } else {
        return (`We have ${availableStalls} remaining!`);
    }
};
console.log(stallAvailibility(horses))

function latePayment(horseVar){
    for(let i = 0; i < horseVar.length; i++){
        let totalLateRent = horseVar[i]["monthlyRent"] + lateFee;
        console.log(`${horseVar[i]["name"]} will have to pay ${horseVar[i]["monthlyRent"]} rent plus an addition late fee of ${lateFee}. Bringing the total to ${totalLateRent}.`);
    };
};
console.log(latePayment(horses));

function likesTreat(horseVar){
    for(let i = 0; i < horseVar.length; i++){
        let treat = horses[2]["favoriteTreat"];
        if(horseVar[i]["favoriteTreat"] === treat){
            return (`${horseVar[i]["name"]} likes ${treat}`);
        } else {
            console.log(`${horseVar[i]["name"]} does not like ${treat}. He preferes ${horseVar[i]["favoriteTreat"]}`);
        }
    };
};
console.log(likesTreat(horses));

function findNickname(horseName){
    for(let i = 0; i < horses.length; i++){
        if(horses[i]["name"] === horseName){
            return (`${horseName}'s nickname is ${horses[i]["nickname"]}`);
        }
    }
    return (`horse named ${horseName} not found`);
};
console.log(findNickname("Hugo"));


//------------------------- Day to day operations -------------------------//


function findHorseColor(hairColor){
    for (let i = 0; i < horses.length; i++){
        if(horses[i]["color"] === hairColor){
            return (`${horses[i]["name"]} has ${horses[i]["color"]} colored ponytails`)
        }
    } 
    return (`No horse has ${hairColor} colored ponytails`);
};
console.log(findHorseColor("blue"));

function goOutHorses (horseVar){
    for(let i = 0; i < horseVar.length; i++){
        if(horseVar[i]["isInside"] === true){
            horseVar[i]["isInside"] = false;
        }
    }
    console.log(`All horses have been brought outside to spend time in the sun`)
};
console.log(goOutHorses(horses));

horses[3].callInside = function (){
    if(this.isInside == false){
        return this.isInside = true;
    } 
        return this.isInside = false;
};

function feedHorses (horseVar){
    for(let i = 0; i < horseVar.length; i++){
        if (horseVar[i].isInside === false){
            horseVar[i].isInside = true;
        }
        console.log(`${horseVar[i].name} is inside with everyone and eating his favorite treat ${horseVar[i].favoriteTreat}`);
    };
};
console.log(feedHorses(horses));

function updateHorseLocation (horseVar){
    console.log(goOutHorses(horseVar));
    for(let i = 0; i < horseVar.length; i++){
        if(horseVar[i].isInside === false){
            horseVar[i].isInside = true;
        };
        console.log(`${horseVar[i].name} come inside it's getting dark outside`);
    };
};
console.log(updateHorseLocation(horses));




// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.

// Create a variable and use it to store a message visitors to the stable.
// Create a variable and use it to store the cost of a late payment fee.
// Create a variable and use it to store the number of available stalls in the stable.

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
//
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

// Store the horses you've just created in your "horses" variable.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.