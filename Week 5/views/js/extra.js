const getProjectss = () => {
    $.get('/api/projects', (response) => {
        if(response.statusCode == 200) {
            addCards(response.data);
        }
    })
}

$(document).ready(function() {
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        sumbitForm();
    })
    // getProjects();

})

