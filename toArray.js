let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}

console.log(Object.entries(scrimbaUsers));

let scrimbaUsersEmails = Object.values(scrimbaUsers)
let scrimbaUsersIDs = Object.keys(scrimbaUsers)
let scrimbaUsersEntries = Object.entries(scrimbaUsers)

console.log(scrimbaUsersEmails);
console.log(scrimbaUsersIDs);
console.log(scrimbaUsersEntries);