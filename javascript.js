$(document).ready(function(){
    $('#searchUser').on('keyup', function(event){
        let username = event.target.value;
        
    $.ajax({
        url: `https://api.github.com/users/${username}/repos`,
        data: {
            client_id: 'd64cd59b8c2384969e47',
            client_secret: 'cf4f13197abda568924ca2d9ffad07600bd519f8',
            sort: 'created: asc',
            per_page: 5
        }
    }).done(function(repos){
        $.each(repos, function(index, repo){
            $('#repos').append(`<li class = "repo-name"><a href="${repo.html_url}">${repo.name}</a></li>
            `)
        })
    })
    })


})