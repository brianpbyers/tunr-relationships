var DB = require("../models").models;

var lucySongs = [
     {
          title: "O sole mio",
          duration: "3:21",
          date_of_release: "1990",
          album_title: "Three Tenors in Concert",
          artistId: ""
     },
     {
          title: "Nessun dorma",
          duration: "3:21",
          date_of_release: "1990",
          album_title: "Three Tenors in Concert",
          artistId: ""
     },
     {
          title: "HOLY POTATOES A SONG",
          duration: "99:99",
          date_of_release: "78",
          album_title: "Three Potatoes In a Line",
          artistId: ""
     }
];
 
 var managerCreate = function() {
     return DB.Manager.create({
     name: 'Ricky Bobby',
     email: 'rbobby@gmail.com',
     office_number: '516-877-0304',
     cell_phone_number: '718-989-1231'
     })
     .then((manager)=>{
          DB.Artist.create({
               name: 'Luciano Pavarotti',
               photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
               nationality: 'Italiano',
               instrument: 'Voice',
               home_address: '1 Strada Roma',
               managerId: manager.id
           })
          .then((artist)=>{
               lucySongs.forEach((song)=>{
                    song.artistId=artist.id;
               });
               DB.Song.bulkCreate(lucySongs);
           });
     });
}
  
 var songCreate = function() {
 	return DB.Song.create({
 	    title: 'The Best Song Ever',
 	    duration: '3:31',
 	    date_of_release: '7/13/2015',
 	    album_title: 'Best Album Ever'
 	});
 };
 
managerCreate()
 .then(songCreate)
 .then(function() {
 	process.exit();
 }); 