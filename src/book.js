function createTitle(title) {
  return `The ${title}`;
}


function buildMainCharacter(charName, charAge, charPronous) {
  return {
    name: charName,
    age: charAge,
    pronouns: charPronous,
  };
}


function saveReview(newReview, reviewList) {
  for (var i = 0; i < reviewList.length; i ++) {
    if (newReview === reviewList[i]) {
      return;
    }
  }
  reviewList.push(newReview);
}


function calculatePageCount(title) {
  return title.length * 20;
}


function writeBook (title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
}


function editBook(book) {
  book.pageCount *= (3/4);
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}