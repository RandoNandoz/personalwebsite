/**
 * 
 * @param {number} birthDateUnixTimestamp Is the user's age in Unix time.
 */

// *Slaps roof of truck* this bad boy function will last me even if I die.
function getAge(birthDateUnixTimestamp) {
    const date = new Date();

    // Gets the current Unix time stamp to difference with the birthDate
    let currentUnixTime = date.getTime() / 1000
    console.log(`The user's current Unix timestamp is ${currentUnixTime}`)

    // The age of the user is calculated by subtracting the time currently by their birthday, therefore returning the difference
    let unixAge = currentUnixTime - birthDateUnixTimestamp

    // Converts Unix time to years, then rounds accordingly.

    // Close enough... Probably will lose accuracy in centuries.
    let secondsInYear = 3.154e+7

    let age = Math.floor(unixAge / secondsInYear)

    console.log(`The developer's age is ${age} years old`);

    document.getElementById("age").innerHTML = age
}

// 1122940800 is my birthday in Unix time. 2005/08/02 00:00
getAge(1122940800)