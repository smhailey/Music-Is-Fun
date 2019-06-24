export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    get Template() {
        return `
        <div class="col" m-2>
            <div class="card" style="width: 18rem;">
                <img src=${this.albumArt} class="card-img-top" alt="albumArt">
                <div class="card-body">
                    <h4 class="card-title">${this.artist}</h4>
                    <h5 class="card-text">${this.title}</h5>
                    <h6 class="card-text">${this.collection}</h6>
                    <p class="card-text">${this.price}</p>
                    <audio controls src=${this.preview}>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </div>
            </div>
        </div>
        `
    }
}