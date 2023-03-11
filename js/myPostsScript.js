$(document).ready(function($){
    const currentUser = sessionStorage.getItem('currentUser');
    const articlesID = localStorage.getItem('articlesID');
    let articleNew;
    let userArticleInfo;
    let postsHere = 0;
    if((articlesID <= 0)){
        $('.articleZone').html("<h2 id='notPublished'>You haven't published any posts yet</h2>");
    };
    for(let i = 0; i < articlesID; i++){
      articleNew = JSON.parse(localStorage.getItem('article' + i));
      if(articleNew.removed == false){
        userArticleInfo = JSON.parse(localStorage.getItem(articleNew.PostUser))
        if(currentUser != undefined){
          if(JSON.parse(localStorage.getItem(currentUser)).names === userArticleInfo.names){
            $('.articleZone').html('<section class="article"><div class="articleHead"><img src="' + userArticleInfo.profileImg + '"><p class="user">' + userArticleInfo.names + '</p><p class="languageWork">' + userArticleInfo.language + '</p><input type="button" value="Delete post" title="Delete Post" class="postDelete" id="DELETEarticle'+ i +'"></div><div class="articleText"><div class="articleName"><h2>' + articleNew.articleTitle + '</h2></div><p>' + articleNew.articleContent + '</p></div><div class="articleImg"><img src="' + articleNew.articleIMG + '"></div><div class="ratingIn"><div class="rating"><div class="views"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"/><path d="M23.205 11.745C22.3229 9.46324 20.7915 7.48996 18.8001 6.06906C16.8087 4.64817 14.4446 3.84193 12 3.75C9.55537 3.84193 7.19128 4.64817 5.19989 6.06906C3.2085 7.48996 1.67711 9.46324 0.794986 11.745C0.735412 11.9098 0.735412 12.0902 0.794986 12.255C1.67711 14.5368 3.2085 16.51 5.19989 17.9309C7.19128 19.3518 9.55537 20.1581 12 20.25C14.4446 20.1581 16.8087 19.3518 18.8001 17.9309C20.7915 16.51 22.3229 14.5368 23.205 12.255C23.2646 12.0902 23.2646 11.9098 23.205 11.745V11.745ZM12 16.875C11.0358 16.875 10.0933 16.5891 9.29158 16.0534C8.48989 15.5177 7.86505 14.7564 7.49607 13.8656C7.1271 12.9748 7.03056 11.9946 7.21866 11.0489C7.40676 10.1033 7.87106 9.23464 8.55284 8.55285C9.23462 7.87107 10.1033 7.40677 11.0489 7.21867C11.9946 7.03057 12.9748 7.12711 13.8656 7.49609C14.7564 7.86506 15.5177 8.48991 16.0534 9.2916C16.5891 10.0933 16.875 11.0358 16.875 12C16.873 13.2923 16.3588 14.5311 15.4449 15.445C14.5311 16.3588 13.2923 16.873 12 16.875V16.875Z" fill="white"/></svg><p>0</p></div><div class="stars"><ul><li><img src="/project_6m/scripteld/images/starRating.png"></li><li><img src="/project_6m/scripteld/images/starRating.png"></li><li><img src="/project_6m/scripteld/images/starRating.png"></li><li><img src="/project_6m/scripteld/images/starRating.png"></li><li><img src="/project_6m/scripteld/images/starRating.png"></li></ul></div><img style="position:relative;" class="favBtn" src="images/icon_favorite.svg" alt="favorite"></div></div></section>'+ $('.articleZone').html());
            postsHere = postsHere + 1;
          }
        }else if((currentUser != undefined) || (JSON.parse(localStorage.getItem(currentUser)).names != userArticleInfo.names) || (articleNew == undefined)){
            $('.articleZone').html("<h2 id='notPublished'>You haven't published any posts yet</h2>");
        };
      };

    };
    if(postsHere == 0){
      $('.articleZone').html("<h2 id='notPublished'>You haven't published any posts yet</h2>");
    }
  })
$(document).ready(function($){
  $('.postDelete').on("click",function(event){
    let articleDeleteID = (String(event.target.id)).replace('DELETE', '');
    let DelConfirm = confirm('Are you sure?(This action will delete this article)')
    if(DelConfirm){
      articleNew = JSON.parse(localStorage.getItem(articleDeleteID));
      articleNew.removed = true;
      localStorage.setItem(articleDeleteID,JSON.stringify(articleNew));
      window.location.reload();
    }
  });
});