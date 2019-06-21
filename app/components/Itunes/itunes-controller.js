import ItunesService from "./itunes-service.js";
//Private
let _itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(_itunesService.Songs)

  let itunesElem = document.querySelector("#songs")
  let template = ''
  let itunes = _itunesService.Songs
  itunes.forEach(song => {
    template += song.Template
  })
  itunesElem.innerHTML = template
}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    let artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    _itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController