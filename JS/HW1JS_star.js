


let item_1 = 5;
console.log(item_1);
let item_2 = 3;
console.log(item_2);
let item_3 = item_1 + item_2;
console.log(item_3);
let item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
let item_5 = item_3;
let item_6;
let item_6_type;
item_6 = 15;
item_6_type = typeof(item_6);
console.log("-- item_6 == " + item_6 + ", item_6_type == " + item_6_type + " --");
let item_7 = item_6.toString();
let item_7_type = typeof(item_7);
console.log("-- item_7 == " + item_7 + ", item_7_type == " + item_7_type + " --");

checkAge = function(age_1) {
    //let age_1 = 10;
    if ((typeof(age_1) != "string") && (typeof(age_1) != "number")){
        return("not number!")
    };
    if ((typeof(age_1) == "string") && (age_1.length != 1) && ((!isNaN(Number(age_1))))){
        return("not valid")
    };
    let age_2 = 18;
    let age_3 = 60;
    if (age_1 < age_2) {
       return("You don\'t have access cause your age is " + age_1 + " It\'s less then ");
    }
    else if ((age_1 >=  age_2) && (age_1 <  age_3)){
        return("Welcome!");
    }else if (age_1  > age_3) {
        return("Keep calm and look Culture channel");
    } else {
        return("Technical work");
    }
        }
console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(61));
console.log(checkAge("7"));

alert(checkAge(prompt("Enter your age")));
