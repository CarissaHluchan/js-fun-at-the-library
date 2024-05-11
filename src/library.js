function createLibrary(libraryName) {
var library = {
  name: libraryName,
  shelves: {
    fantasy:[], 
    fiction:[], 
    nonFiction:[], 
  }
}
return library;
}


function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "fiction") {
      library.shelves.fiction.push(book);
  } else if (book.genre === "nonFiction") {
      library.shelves.nonFiction.push(book);
  } else {}
}


function checkoutBook(library, title, genre) {
  var shelf = library.shelves[genre];
  for (var i = 0; i < shelf.length ; i++){
    var book = shelf[i];
    if (book.title === title) {
      shelf.splice(i,1);
      return `You have now checked out ${title} from the ${library.name}.`
    } 
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
}


function takeStock(library, genre) {
  if (genre !== undefined) {
    var elmOnShelf = library.shelves[genre].length
    return `There are a total of ${elmOnShelf} ${genre} books at the ${library.name}.`
  } else {
    var numOFBooks = 0;
    numOFBooks += library.shelves.fantasy.length; 
    numOFBooks += library.shelves.fiction.length; 
    numOFBooks += library.shelves.nonFiction.length; 
  return `There are a total of ${numOFBooks} books at the ${library.name}.`
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};