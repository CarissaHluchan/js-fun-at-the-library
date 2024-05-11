function createTitle(title) {
  // console.log("title: ", title)
  return `The ${title}`;
}
//what is undefined???
// undefined is telling us: we don't have a value where one should be

function buildMainCharacter(charName, charAge, charPronous) {
  return {
    name: charName,
    age: charAge,
    pronouns: charPronous,
  };
}

// function buildMainCharacter(charName, charAge, charPronouns) {
//   var character = {
//     name: charName,
//     age: charAge,
//     pronouns: charPronouns,
//   }
//   return character
// }


function saveReview(newReview, reviewList) {
  for (var i = 0; i < reviewList.length; i ++) {
    if (newReview === reviewList[i]) {
      return;
    }
  }
  reviewList.push(newReview);
}

// function saveReview(reviewSrr, reviewArr) {
//   if (!reviewsArr.inclues(reviewStr)) {
//     reviewArr.push(reviewStr)
//   }
// }


// function saveReview(newReview, reviewList) {
//   var isAlreadyInTheList = false;
//   for (var i = 0; i < reviewList.length; i ++) {
//     if (newReview === reviewList[i]) {
//       isAlreadyInTheList = true;
//     }
//   }
//   if (!isAlreadyInTheList) {
//     reviewList.push(newReview);
//   }
// }


// function saveReview (personsReview,reviewList) {
//   var repeatedReview = false;
//   for (var i = 0; i < reviewList.length; i ++) {
//     if (reviewList[i] === personsReview){
//       repeatedReview = true;
//     }
//   }
//     if (!repeatedReview) {
//       reviewList.push(personsReview)
//     }
  
//   return reviewList
  
// }


function calculatePageCount(title) {
  return title.length * 20;
}

// function calculatePageCount(bookName) {
//    var pages = bookName.length * 20;
//     return pages
//   }

function writeBook (title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
}

// function writeBook (aboutBook, character, type) {
//   var book = {
//     title: aboutBook,
//     mainCharacter: character,
//     pageCount: calculatePageCount(aboutBook),
//     genre: type,
//   }
//   console.log(book)
//   return book
// }


function editBook(book) {
  book.pageCount *= (3/4);
}

// function editBook() {
//   var decreasePageCount = calculatePageCount(title) * ( 3 / 4 );
// }

// function editBook(book) {
//   book.pageCount = book.pageCount * (3/4);
// }


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}