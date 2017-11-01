var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
			 
	//Methods start here!
	printTracks:function() {
		var tmp = this.tracks;
		for (var x in tmp){
			console.log(tmp[x]['id'] + ": " + tmp[x]['name'] +" by " +tmp[x]['artist']+ " (" + tmp [x]['album']+")");
		}
	},
	
	printPlaylist : function (playlistId) {
		var tmp = this.playlists[playlistId];
		//console.log(tmp);
		console.log(tmp.id +": " + tmp.name + " - " + tmp['tracks'].length + " tracks")
		for(var x of tmp['tracks']){
			console.log(this.tracks[x].id+": "+ this.tracks[x].name + " by " + this.tracks[x].artist + " ("+ this.tracks[x].album);
		}
	},
	
	
	printPlaylists : function () {
		var tmp = this.playlists;
		for (var x in tmp){
			console.log(tmp[x]['id'] + ": " + tmp[x]['name'] + " - " + tmp [x]['tracks'].length + " tracks");
		}
	},
	addTrackToPlaylist : function (trackId,playlistId) {
		if(this.tracks[trackId]!= undefined && this.playlists[playlistId]!=undefined){//check if either the playlist or the track are invalid
			this.playlists[playlistId].tracks.push(trackId);	//add track to track list
			//console.log(library.playlists[playlistId]);//debugging code
		}else{
			console.log("track or playlist not found not found");//error message
		}
	},
	addTrack : function (name, artist, album) {
		var id = hash(name+artist+album);//generate unique hash for id
		this.tracks[id] = {
			'id': id,
			'name':name,
			'artist' :artist,
			'album' :album
		};
	},
	addPlaylist : function (name) {
		var id = hash(name);
		this.playlists[id] = {
			'id' : id,
			'name':name,
			'tracks':[]
		};
	}
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks




// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)




// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)




// adds an existing track to an existing playlist




// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {//using a random int as an id is bad form, use a hash functiom next time
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  
}
function hash(str) {//hash function source: https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
  var hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

// adds a track to the library



// adds a playlist to the library




// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
//library.printPlaylist('p01');
//library.printPlaylists();
//library.printTracks();
library.addTrack("Closer","Nine Inch Nails", "Downward Spiral");
//library.printTracks();
//library.addPlaylist("Edgelord music");
//library.printPlaylists();
library.printPlaylist("p01");
library.addTrackToPlaylist(hash("Closer"+"Nine Inch Nails"+ "Downward Spiral"),"p01");
library.printPlaylist("p01");
//printPlaylists();
//printTracks();
//addTrack("Closer","Nine Inch Nails", "Downward Spiral");
//printTracks();
//addPlaylist("Edgelord music");
//printPlaylists()
//printPlaylist("p01");
//addTrackToPlaylist("t01","p01");
//printPlaylists();

