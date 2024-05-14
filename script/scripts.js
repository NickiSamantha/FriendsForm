
let friends = []

let addFriends = document.querySelector('[addFriends]')
addFriends.addEventListener('click'//first argument(click event, basically what must be used to get the result)
, () => //to specify a arrow fuction -- without a name annonomys 
    { //below is how to create a arrow fuction
    friends.push({ //want use friends to push - add a new element, use brackets to create an object , use {} to push an object
        firstName: //this is the attribute
        document.querySelector //inorder to grab the info
        ('[firstName]') //specify the attribute
        .value, //to get the value must add this
        lastName: document.querySelector('[lastName]').value
    })
    console.table(friends);
})

  


  
