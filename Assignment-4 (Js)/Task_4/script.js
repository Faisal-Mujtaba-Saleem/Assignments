let user_name = prompt('Enter yor name');
let user_age = prompt('Enter yor age');

if (user_age >= 18) {
    alert(` Welcome "${user_name}", you are an adult`)
} else {
    alert(`Sorry ${user_name}, you are not yet an adult`)
}