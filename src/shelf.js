
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}


function unshelfBook(targetTitle, shelf) {
  // loop through arry
  for (var i = 0; i < shelf.length; i++)
    // check if title matches
    if (targetTitle === shelf[i].title) {
      shelf.splice(i, 1)
    }
  // remove book
}


function listTitles(shelf) {
  // make string var
  var allTitles = '';
  // loop through the array
  for (var i = 0; i < shelf.length; i++) {
    // access the book, and grab the title
    // var currentTitle = shelf[i].title;
    // add title end of exsiting string
    allTitles += shelf[i].title;
    // add a , space...except at the end
    if (i < shelf.length - 1) {
      // add, space
      allTitles += ', '
    }
  }
  // return the string
  return allTitles;
}


function searchShelf(shelf, title) {
// loop through items on a shelf
for (var i = 0; i < shelf.length; i++) {
  // identify if a book is on the self
  if (shelf[i].title === title) {
    return true;
  }
}
// return a value of ture if book is on the shelf
// if the book is not on the shelf return false
return false;
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};