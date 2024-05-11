
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}


function unshelfBook(targetTitle, shelf) {
  for (var i = 0; i < shelf.length; i++)
    if (targetTitle === shelf[i].title) {
      shelf.splice(i, 1)
    }
}


function listTitles(shelf) {
  var allTitles = '';
  for (var i = 0; i < shelf.length; i++) {
    allTitles += shelf[i].title;
    if (i < shelf.length - 1) {
      allTitles += ', '
    }
  }
  return allTitles;
}


function searchShelf(shelf, title) {
for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title === title) {
    return true;
  }
}
return false;
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};