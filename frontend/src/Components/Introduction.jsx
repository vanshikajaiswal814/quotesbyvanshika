import React from "react";
import professional_photograph from "../images/professional_photograph.jpg";

const Introduction = () => {
  return (
    <div>
      <div className="container">
        <div className="title text-center">
          <h2 className="text-uppercase my-5">
            Warm Welcome to quotes by vanshika{" "}
          </h2>
        </div>
        <div className="card">
          <div className="row bg-warning">
            <div className="col-md-5 ">
              <img
                src={professional_photograph}
                alt="..."
                className="img-fluid rounded-start img-thumbnail"
                height="100"
                width="130"
              />
            </div>
            <div className="col-md-5">
              <div class="text-success">
                <h3 className="card-title">Vanshika Jaiswal</h3>
                <p class="text-success">
                  {" "}
                  I am Vanshika Jaiswal, an Enthusiastic quotes writer and
                  motivational Speaker. My interest in motivational speaking has
                  led me to create my own motivational site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
