const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];




////////////////////////////////////////////////////////////////////////
// Does each book has been rented at least one ?


let i = 0;

books.forEach(element => {
    if (element.rented == 0) {
        console.log("At least one book never been rented!");
        i++;
    }
});

if (i == 0) {
    console.log(" Each book has been rented at least once !")
}



////////////////////////////////////////////////////////////////////////////////////////////
//  Find the book with the ID: 873495 ;

let id_to_find = 873495;

const found_id = books.find(element => element.id = id_to_find);


// console.log(found_id);






//////////////////////////////////////////////////////////////////////////
// Which book has been less rented ?


let min_value_rented = Math.min(...books_rented);

const found_min = books.find(element => element.rented = min_value_rented);

// console.log(found_min);






//////////////////////////////////////////////////////////////////////
// Delete the book with Id 133712

let books_to_delete = books.find(element => element.id = 133712);

books.splice(books_to_delete, 1);

// console.log(books);




