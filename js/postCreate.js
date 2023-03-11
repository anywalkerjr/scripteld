$(document).ready(function($){
    let articleIMG;
    let articleTitle;
    let articleContent;
    let articleID = localStorage.getItem('articlesID')
    const form = document.querySelector('#post');
    $('#image-upload').on('click', function() {
        $('#image').trigger('click');
    });
    $('#image').on('change', function() {
        const file = $('#image').prop('files')[0];
        const reader = new FileReader();
        reader.onload = function() {
            $('#outputFiles').html(file.name + (' (' + String((Math.round(file.size / 1024 * 100) / 100)) + 'KB)') );
            articleIMG = reader.result;
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    })
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        articleTitle = document.querySelector('#title').value;
        articleContent = document.querySelector('#content').value;
        const user = sessionStorage.getItem('currentUser');
        const localUserInfo = JSON.parse(localStorage.getItem(user));
        let newArticle = {
            PostUser: localUserInfo.username,
            articleTitle: articleTitle,
            articleContent: articleContent,
            articleIMG: articleIMG,
            views: 1,
            removed: false
        }
        if (articleContent && articleIMG) {
            localStorage.setItem('article' + articleID, JSON.stringify(newArticle));
            localStorage.setItem('articlesID', Number(articleID) + 1);
            alert('Successful!');
            form.reset();
            $('#outputFiles').html('none');
        } else {
            alert('Please fill in both the article content and image fields');
        }
    });
    
  })