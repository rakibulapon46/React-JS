import { Component } from "react";
import "./BlogCSS/Blog.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      short_title: {
        STitle1: "This is picture 1",
        STitle2: "This is picture 2",
        STitle3: "This is picture 3",
      },
      long_title: {
        LTitle1: "Hills and river view with boat",
        LTitle2: "Hills and sea view with clear sky",
        LTitle3: "Sea view with sunset and water streams",
      },
      paragraph: {
        p1: 'A tranquil mountain lake mirrors the surrounding peaks and woods, with red canoes docked at the shore, creating a picturesque and peaceful outdoor setting.',
        p2: 'A serene landscape where sunlight bathes snow-capped mountains, casting cool shadows in the valley, with a vibrant blue lake reflecting the tranquil beauty of nature.',
        p3: 'The image captures a serene seascape at dusk, with a long exposure effect smoothing the water against a rocky, moss-covered shoreline, under a gradient sky with a soft-hued sunset, evoking a sense of calmness and the beauty of nature.',
      },
      channelName: {
        channel1: "Random Blog 1",
        channel2: "Random Blog 2",
        channel3: "Random Blog 3",
      },
      creationDate: {
        date1: "14.05.2024",
        date2: "15.05.2024",
        date3: "16.05.2024",
      },
    };
  }

  render() {
    return (
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade container mt-5"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <img src="img/1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6 p-4">
                  <p className="short_title">{this.state.short_title.STitle1}</p>
                  <h3 className="long_title">{this.state.long_title.LTitle1}
                  </h3>
                  <p className="short_title">{this.state.paragraph.p1}
                  </p>
                  <p className="channelName">{this.state.channelName.channel1}</p>
                  <p className="short_title">{this.state.creationDate.date1}</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <img src="img/2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6 p-4">
                  <p className="short_title">{this.state.short_title.STitle2}</p>
                  <h3 className="long_title">{this.state.long_title.LTitle2}
                  </h3>
                  <p className="short_title">{this.state.paragraph.p2}
                  </p>
                  <p className="channelName">{this.state.channelName.channel2}</p>
                  <p className="short_title">{this.state.creationDate.date2}</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <img src="img/3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6 p-4">
                  <p className="short_title">{this.state.short_title.STitle3}</p>
                  <h3 className="long_title">{this.state.long_title.LTitle3}
                  </h3>
                  <p className="short_title">{this.state.paragraph.p3}
                  </p>
                  <p className="channelName">{this.state.channelName.channel3}</p>
                  <p className="short_title">{this.state.creationDate.date3}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
