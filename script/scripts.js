
let friends = []

let addFriends = document.querySelector('[addFriends]')

addFriends.addEventListener('click', () =>  { 
    friends.push({ 
        firstName: document.querySelector('[firstName]').value, 
        lastName: document.querySelector('[lastName]').value
    })
    console.table(friends);
})

//first argument(click event, basically what must be used to get the result)

//to specify a arrow fuction -- without a name annonomys
  
//below is how to create a arrow fuction

//want use friends to push - add a new element, use brackets to create an object , use {} to push an object
  
//this is the attribute

//inorder to grab the info

//specify the attribute

//to get the value must add this