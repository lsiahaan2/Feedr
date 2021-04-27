/*
  Please add all Javascript code to this file.
*/
// 1. Get News API Working and Console log the responce
// 2. Loop Over Articles and Append to the DOM
// 3. Fix the Loader
$(function () {
  console.log('loaded');
  const newsApiKey = '2366d554e21f4f489fdcd2c0ce9dfbbc';
  const GnewsApiKey = '2cd758fbf6c51045a00fa6fe69b33a98';
  const MediastackApiKey = 'd8033e7bf9bf0c207eb7afcf50f7147d'
  const GuardianstackApiKey = '80e0a4a9-7579-412c-be00-c38fba421530'
  let GnewsArticlesArray = [];
  let MediastackArticlesArray = [];
  let newsApiArticlesArray = [];
  let GuardianArticlesArray = [];
  let source = '';

  let $mainContainer = $('#main');
  let $popUp = $('#popUp');
  let $newsSourceDropdown = $('li > ul');
  let $closePopUpButton = $('.closePopUp');

  function getNewsApiData() {
    $popUp.removeClass('hidden');
    $mainContainer.empty();
    $.get(
      `https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v2/top-headlines?country=au&apiKey=2366d554e21f4f489fdcd2c0ce9dfbbc`
    ).then((response) => {
      newsApiArticlesArray = response.articles;

      $.each(newsApiArticlesArray, function (index) {
        let title = this.title;
        let source = this.source.name;
        let publishedAt = this.publishedAt;
        let imageUrl = this.urlToImage;
        let url = this.url;
        let content = this.content;

        let $newArticle = $(`
          <article data-id=${index} class="article">
            <section class="featuredImage">
              <img src=${
                imageUrl || 'images/article_placeholder_1.jpg'
              } alt="" />
            </section>
            <section class="articleContent">
              <a href='#'>
                <h3>${title}</h3>
              </a>
              <h6>${source}</h6>
            </section>
            <section class="impressions">${publishedAt}</section>
            <div class="clearfix"></div>
          </article>;      
        `);

        $newArticle.on('click', showPopUpNewsApi);
        $mainContainer.append($newArticle);
      });

      $popUp.addClass('hidden');
    });
  }

  function showPopUpNewsApi() {
    let index = $(this).attr('data-id');

    let title = newsApiArticlesArray[index].title;
    let url = newsApiArticlesArray[index].url;
    let content = newsApiArticlesArray[index].content;

    console.log(title, url, content);
    $popUpContainerChildren = $('div.container');
    $popUpContainerChildren.html(`
      <h1>${title}</h1>
      <p>${content}.</p>
      <a href=${url} class="popUpAction" target="_blank">Read more from source</a>
    
    `);

    $popUp.removeClass('loader hidden');
    $closePopUpButton.on('click', function () {
      $popUp.addClass('loader hidden');
    });

    $popUpContainerChildren.children();
  }

  function getMediastackData() {
    $popUp.removeClass('hidden');
    $mainContainer.empty();
    $.get(
      `https://accesscontrolalloworiginall.herokuapp.com/http://api.mediastack.com/v1/news?access_key=d8033e7bf9bf0c207eb7afcf50f7147d&countries=au`
    ).then((response) => {
      MediastackArticlesArray = response.data;

      $.each(MediastackArticlesArray, function (index) {
        let title = this.title;
        let source = this.source;
        let publishedAt = this.published_at;
        let imageUrl = this.image;
        let url = this.url;
        let content = this.description;

        let $newArticle = $(`
          <article data-id=${index} class="article">
            <section class="featuredImage">
              <img src=${
                imageUrl || 'images/article_placeholder_1.jpg'
              } alt="" />
            </section>
            <section class="articleContent">
              <a href='#'>
                <h3>${title}</h3>
              </a>
              <h6>${source}</h6>
            </section>
            <section class="impressions">${publishedAt}</section>
            <div class="clearfix"></div>
          </article>;      
        `);

        $newArticle.on('click', showPopUpMediastack);
        $mainContainer.append($newArticle);
      });

      $popUp.addClass('hidden');
    });
  }

  function showPopUpMediastack() {
    let index = $(this).attr('data-id');

    let title = MediastackArticlesArray[index].title;
    let url = MediastackArticlesArray[index].url;
    let content = MediastackArticlesArray[index].description;

    console.log(title, url, content);
    $popUpContainerChildren = $('div.container');
    $popUpContainerChildren.html(`
      <h1>${title}</h1>
      <p>${content}.</p>
      <a href=${url} class="popUpAction" target="_blank">Read more from source</a>
    
    `);

    $popUp.removeClass('loader hidden');
    $closePopUpButton.on('click', function () {
      $popUp.addClass('loader hidden');
    });

    $popUpContainerChildren.children();
  }
//
function getGuardianData() {
  $popUp.removeClass('hidden');
  $mainContainer.empty();
  $.get(
    `https://accesscontrolalloworiginall.herokuapp.com/https://content.guardianapis.com/search?api-key=80e0a4a9-7579-412c-be00-c38fba421530&q=Melbourne&format=json&show-fields=all`
  ).then((response) => {
    GuardianArticlesArray = response.response.results;

    $.each(GuardianArticlesArray, function (index) {
      let title = this.webTitle;
      let source = this.sectionName;
      let publishedAt = this.webPublicationDate;
      let imageUrl = this.fields.thumbnail;
      let url = this.webUrl;
      let content = (this.fields.bodyText);

      let $newArticle = $(`
        <article data-id=${index} class="article">
          <section class="featuredImage">
            <img src=${
              imageUrl || 'images/article_placeholder_1.jpg'
            } alt="" />
          </section>
          <section class="articleContent">
            <a href='#'>
              <h3>${title}</h3>
            </a>
            <h6>${source}</h6>
          </section>
          <section class="impressions">${publishedAt}</section>
          <div class="clearfix"></div>
        </article>;      
      `);

      $newArticle.on('click', showPopUpGuardian);
      $mainContainer.append($newArticle);
    });

    $popUp.addClass('hidden');
  });
}

function showPopUpGuardian() {
  let index = $(this).attr('data-id');

  let title = GuardianArticlesArray[index].webTitle;
  let url = GuardianArticlesArray[index].webUrl;
  let content = GuardianArticlesArray[index].fields.bodyText;

  console.log(title, url, content);
  $popUpContainerChildren = $('div.container');
  $popUpContainerChildren.html(`
    <h1>${title}</h1>
    <p>${content}.</p>
    <a href=${url} class="popUpAction" target="_blank">Read more from source</a>
  
  `);

  $popUp.removeClass('loader hidden');
  $closePopUpButton.on('click', function () {
    $popUp.addClass('loader hidden');
  });

  $popUpContainerChildren.children();
}

/*
*/
function getGnewsData() {
  $popUp.removeClass('hidden');
  $mainContainer.empty();
  $.get(
    `https://accesscontrolalloworiginall.herokuapp.com/https://gnews.io/api/v4/search?q=example&token=2cd758fbf6c51045a00fa6fe69b33a98&lang=en`
  ).then((response) => {
    GnewsArticlesArray = response.articles;

    $.each(GnewsArticlesArray, function (index) {
      let title = this.title;
      let source = this.source.name;
      let publishedAt = this.publishedAt;
      let imageUrl = this.image;
      let url = this.url;
      let content = this.content;

      let $newArticle = $(`
        <article data-id=${index} class="article">
          <section class="featuredImage">
            <img src=${
              imageUrl || 'images/article_placeholder_1.jpg'
            } alt="" />
          </section>
          <section class="articleContent">
            <a href='#'>
              <h3>${title}</h3>
            </a>
            <h6>${source}</h6>
          </section>
          <section class="impressions">${publishedAt}</section>
          <div class="clearfix"></div>
        </article>;      
      `);

      $newArticle.on('click', showPopUpGnews);
      $mainContainer.append($newArticle);
    });

    $popUp.addClass('hidden');
  });
}

function showPopUpGnews() {
  let index = $(this).attr('data-id');

  let title = GnewsArticlesArray[index].title;
  let url = GnewsArticlesArray[index].url;
  let content = GnewsArticlesArray[index].content;

  console.log(title, url, content);
  $popUpContainerChildren = $('div.container');
  $popUpContainerChildren.html(`
    <h1>${title}</h1>
    <p>${content}.</p>
    <a href=${url} class="popUpAction" target="_blank">Read more from source</a>
  
  `);

  $popUp.removeClass('loader hidden');
  $closePopUpButton.on('click', function () {
    $popUp.addClass('loader hidden');
  });

  $popUpContainerChildren.children();
}


  function createNewsSourceDropdownMenu() {
    $newsSourceDropdown.children().each(function () {
      $(this).on('click', function () {
        source = $(this).children().text();
        switch (source) {
          case 'NewsAPI':
            getNewsApiData();
            break;
          case 'Mediastack':
            getMediastackData();
            break;
          case 'Gnews':
            getGnewsData();
            break;
          case 'Guardian':
            getGuardianData();
          default:
            console.log('error');
        }
      });
    });
  }

  $popUp.removeClass('hidden');
  createNewsSourceDropdownMenu();
  getNewsApiData();
});
