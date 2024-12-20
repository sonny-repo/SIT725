// const { get } = require("../../routers/routers");

const getProjectss = () => {
    $.get('/api/projects', (response) => {
        if(response.statusCode == 200) {
            addCards(response.data);
        }
    })
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.subTitle+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const formSubmitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.path = $('#path').val();
    formData.subTitle = $('#subTitle').val();
    formData.description = $('#description').val();

    console.log(formData);
    postBlog(formData);
}

function postBlog(blog) {
    console.log("extra.js - postBlog")
    $.ajax({
        url:'/api/blog',
        type:'POST',
        data:blog,
        success: (result) => {
            if (result.statusCode === 201) {
                alert('items posted');
                location.reload();
            }
        }
    });
}

function getAllBlogs() {
    console.log("Extra.js - getAllBlogs")
    $.get('/api/blog',(result)=>{
        // if (result.statusCode === 200) {
        //     addCards(result.data);
        // }
        addCards(result.data);
    });
}

// let socket = io();
// socket.on('number',(msg)=>{
//     console.log('Random Number: ' + msg);
// });

// $(document).ready(function(){
//     $('.materialboxed').materialbox();
//     $('#formSubmit').click(()=>{
//         formSubmitted();
//     });
//     $('#refresh').click(()=>{
//         getAllBlogs();
//     });
//     $('.modal').modal();
//     getAllBlogs();
//     // getProjectss();
//     console.log('ready');
// });

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSubmitted();
    });
    getAllBlogs();
    $('#refresh').click(()=>{
        getAllBlogs();
    });
    $('.modal').modal();
    console.log('Ready');
});
