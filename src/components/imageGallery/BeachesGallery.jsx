import React, { Component } from "react";

class BeachesGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async (props) => {
    const response = await fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=beaches&per_page=24&format=json&nojsoncallback=1"
    );
    const data = await response.json();
    const photos = data?.photos?.photo || [];
    this.setState({ images: photos });
  };
  render() {
    const { images } = this.state;
    return (
      <div className="image-gallery">
        {images.map((photo) => (
          <img
            className="images"
            key={photo.id}
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
          />
        ))}
      </div>
    );
  }
}

export default BeachesGallery;
