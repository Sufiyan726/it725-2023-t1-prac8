const cardList = [ {
    title: "Kitten 2",
    path: "images/kitten-2.jpg",
    link: "About Kitten 2",
    description: "Demo desciption about kitten 2"
},
{
    title: "Kitten 3",
    path: "images/kitten-3.jpg",
    link: "About Kitten 3",
    description: "Demo desciption about kitten 3"
}
];

// function to add the cardList to html
const addCards = (items) => {
items.forEach(item => {
    let itemToAppend = '<div class="col s4 center-align">'+
        '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
        '</div><div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
        '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.link+'<i class="material-icons right">close</i></span>'+
        '<span class="card-title grey-text text-darken-4">'+item.description+'<i class="material-icons right">close</i></span>'+
        '</div></div></div>';
    $("#card-section").append(itemToAppend);
});
}

const submitForm = () => {
let formData = {};
formData.first_name = $('#first_name').val();
formData.last_name = $('#last_name').val();
formData.password = $('#password').val();
formData.email = $('#email').val();
console.log("Form Data Submitted: ", formData);
}

$(document).ready(function(){
$('.materialboxed').materialbox();
$('.modal').modal();
addCards(cardList);
$('#formSubmit').click(()=>{
    submitForm();
})
});