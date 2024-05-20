function Footer() {
  return (
    <>
      <div className="bg-primary-subtle py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-5 px-4">
              <h3>Newsletter Subscribe</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                voluptate eveniet illum a temporibus voluptatum!
              </p>
            </div>
            <div className="col-md-6 py-5 px-5">
              <form className="form-inline pt-4 d-flex gap-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter your email"
                />
              <p className="send">
                <img src="img/send.svg" alt="" />
              </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center bg-black m-0 py-3 text-light">Copyright © 2024 All rights reserved | This template is made with ❤️ by Rakibul Apon</p>
    </>
  );
}

export default Footer;
