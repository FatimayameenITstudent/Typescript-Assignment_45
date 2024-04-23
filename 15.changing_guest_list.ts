let guest_list: string []=['Amir' , 'Anwar' , 'kashaan'];

for(let i=0; i<guest_list.length; i++ ){

   // console.log('Dear Mr. ' + guest_list[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank you!')

}
let absent_Guest :string= "Anwar" ;
let new_Guest :string = "kashif" ;

guest_list[1] = new_Guest ;

for(let i=0; i<guest_list.length; i++ ){

    console.log('Dear Mr. ' + guest_list[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank you!')
}
console.log(`${absent_Guest} is not coming to the party`)
