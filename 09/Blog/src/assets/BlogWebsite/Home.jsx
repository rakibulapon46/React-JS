import Card from "./Card";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
        <Navbar />
        <Carousel />

        <div className="container p-0">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <Card
                img="img/1.jpg"
                title="Card Title 1"
                text="A tranquil mountain lake mirrors the surrounding peaks and woods, with red canoes docked at the shore, creating a picturesque and peaceful outdoor setting."
                href="#"
                BtnText="Go Anywhere"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                img="img/2.jpg"
                title="Card Title 2"
                text="A serene landscape where sunlight bathes snow-capped mountains, casting cool shadows in the valley, with a vibrant blue lake reflecting the tranquil beauty of nature."
                href="#"
                BtnText="Go Somewhere"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                img="img/3.jpg"
                title="Card Title 3"
                text="The image captures a serene seascape at dusk, under a gradient sky with a soft-hued sunset, evoking a sense of calmness and the beauty of nature."
                href="#"
                BtnText="Go Nowhere"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                img="img/1.jpg"
                title="Card Title 1"
                text="A tranquil mountain lake mirrors the surrounding peaks and woods, with red canoes docked at the shore, creating a picturesque and peaceful outdoor setting."
                href="#"
                BtnText="Go Anywhere"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                img="img/2.jpg"
                title="Card Title 2"
                text="A serene landscape where sunlight bathes snow-capped mountains, casting cool shadows in the valley, with a vibrant blue lake reflecting the tranquil beauty of nature."
                href="#"
                BtnText="Go Somewhere"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                img="img/3.jpg"
                title="Card Title 3"
                text="The image captures a serene seascape at dusk, under a gradient sky with a soft-hued sunset, evoking a sense of calmness and the beauty of nature."
                href="#"
                BtnText="Go Nowhere"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                img="img/1.jpg"
                title="Card Title 1"
                text="A tranquil mountain lake mirrors the surrounding peaks and woods, with red canoes docked at the shore, creating a picturesque and peaceful outdoor setting."
                href="#"
                BtnText="Go Anywhere"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                img="img/2.jpg"
                title="Card Title 2"
                text="A serene landscape where sunlight bathes snow-capped mountains, casting cool shadows in the valley, with a vibrant blue lake reflecting the tranquil beauty of nature."
                href="#"
                BtnText="Go Somewhere"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <Card
                img="img/3.jpg"
                title="Card Title 3"
                text="The image captures a serene seascape at dusk, under a gradient sky with a soft-hued sunset, evoking a sense of calmness and the beauty of nature."
                href="#"
                BtnText="Go Nowhere"
              />
            </div>
          </div>
        </div>
      </>
  );
}

export default Home;
