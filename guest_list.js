let guest_list = ['Amir', 'Anwar', 'kashaan'];
//for(let i=0; i<guest_list.length; i++ ){
//  console.log('Dear Mr. ' + guest_list[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank you!')
//}
let absent_Guest = "Anwar";
let new_Guest = "kashif";
guest_list[1] = new_Guest;
//for(let i=0; i<guest_list.length; i++ ){
// console.log('Dear Mr. ' + guest_list[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank you!')
//}
console.log(`${absent_Guest} is not coming to the party`);
console.log("Good news! we find big table so we are inviting 3 more guest.");
guest_list.unshift("Zia ali");
guest_list.splice(2, 0, "areeba ali");
guest_list.push("bilal syeed");
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank you!');
}
console.log('\nSorry We cannot arrange big table, Only two people eill be invited');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log((`Sorry Mr. ${remove_guest}, You are not invited for dinner.`));
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ', \n\You are still invited \n\nThank you!');
}
guest_list.splice(0, 2);
console.log(guest_list);
export {};
