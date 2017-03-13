import React from 'react';
import { Card, Label } from 'semantic-ui-react';
import moment from 'moment';

class MatchItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = this.props.rawData.name;
    const address = this.props.rawData.address;
    const metro_name = this.props.rawData.metro_name;
    const postal_code = this.props.rawData.postal_code;
    let img = {};
    if (this.props.rawData.foodspotting_images && this.props.rawData.foodspotting_images.length > 0) {
      img = {
        url: this.props.rawData.foodspotting_images[0].url,
        w: this.props.rawData.foodspotting_images[0].width,
        h: this.props.rawData.foodspotting_images[0].height,
      };
    }
    return (
      <Card className="match-item">
        <center>
          <h3>{name}</h3>
          {(this.props.rawData.foodspotting_images.length > 0) ? <img src={img.url} width={img.w} height={img.h} /> : "No image"}
          <p className="match-item-address">
            {`${address}, ${metro_name} ${postal_code}`}
          </p>
          <div>
            {this.props.listing.times_available.map((time) => {
              const formattedTime = moment(time.time).format('LT');
              return <Label><a href={time.booking_url}>{formattedTime}</a></Label>
            })}
          </div>
        </center>
      </Card>
    )
  }
}
export default MatchItem;
