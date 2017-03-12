import React from 'react';

class MatchItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = this.props.name;
    const address = this.props.address;
    const metro_name = this.props.metro_name;
    const postal_code = this.props.postal_code;
    let img = {};
    if(this.props.foodspotting_images.length > 0) {
      img = {
        url: this.props.foodspotting_images[0].url,
        w: this.props.foodspotting_images[0].width,
        h: this.props.foodspotting_images[0].height,
      };
    }
    return (
      <li className="match-item">
        <center>
          <h3>{name}</h3>
          {(this.props.foodspotting_images.length > 0) ? <img src={img.url} width={img.w} height={img.h} /> : "No image"}
          <p className="match-item-address">
            {`${address}, ${metro_name} ${postal_code}`}
          </p>
        </center>
      </li>
    )
  }
}
export default MatchItem;
