const container=document.querySelector('.container');

      fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then(response => response.json())
      .then(json=>json.items)
      .then(item=>itemInfo(item))

const itemInfo=(item)=>{
// document.createElement('div');
      for (const Element in item){
            console.log( item[Element].id)//id
            console.log( item[Element].accessInfo.country)//contry
            console.log (item[Element].volumeInfo.authors)
             console.log(item[Element].volumeInfo.imageLinks.thumbnail);
            console.log( item[Element].volumeInfo.description);
            console.log( item[Element].volumeInfo. pageCount);
            console.log( item[Element].volumeInfo.description);
            console.log( item[Element].volumeInfo. publisher);
            console.log( item[Element].volumeInfo.title);
            console.log (item[Element].volumeInfo.categories);
            console.log( item[Element].volumeInfo.language)

          container.insertAdjacentHTML('beforeend',`<div class="box">
            <ul>
             <li>${item[Element].id}</li>
            <li>${item[Element].accessInfo.country}</li>
            <li${item[Element].volumeInfo.authors}</li>
            <li><img src="${item[Element].volumeInfo.imageLinks.thumbnail}" alt="" srcset=""></li>
            <li>${item[Element].volumeInfo.description}</li>
            <li>${item[Element].volumeInfo. pageCount}</li>
            <li>${item[Element].volumeInfo. publisher}</li>
            <li>${item[Element].volumeInfo.title}</li>
            <li>${item[Element].volumeInfo.categories}</li>
            <li>${item[Element].volumeInfo.language}</li>
            </ul>
            </div>
`)  
}







}

      // 1. ID
      // 2. contry
      // 3.autor
      // 4.imageLinks.thumb
      // 5. description
      // 6. pageCount
      // 7. pubLisher
      // 8.title
      // 9.categorie
      // 10.language