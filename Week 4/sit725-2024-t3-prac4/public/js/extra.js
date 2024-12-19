const getProjectss = () => {
    $.get('/api/projects', (response) => {
        if(response.statusCode == 200) {
            addCards(response.data);
        }
    })
}

$(document).ready(function() {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        sumbitForm();
    })
    getProjects();
    $('.modal').modal();
})