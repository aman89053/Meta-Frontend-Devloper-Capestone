import React , {useState}from "react";
import Menu from "./menu";
import styled from "styled-components";

function GalleryReact() {
  const [items, setItems] = useState(Menu);
  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
        return curElem.category === categItem;
    });

    setItems(updatedItems);
}
  return (
    <Wrapper>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />
      <div className="menu menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>
            All
          </button>
        </div>
      </div>
      {/* my main items section  */}
      <div className=" menu menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, name, image, description, price } = elem;
                return (
                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                <div className="row Item-inside">
                  {/* for images */}
                  <div className="col-12 col-md-12 col-lg-4 img-div">
                    <img
                      src={image}
                      alt="Menu-pic"
                      className="img img-fluid"
                    />
                  </div>
                  {/* menu items description */}
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="main-title pt-4 pb-3">
                      <h1 className="head">{name}</h1>
                      <p className="para">
                        {description}
                      </p>
                    </div>
                    <div className="menu-price-book">
                      <div className="price-book-divide d-flex justify-content-between ">
                        <h2 className="headtwo">{price}</h2>
                        <a href="#">
                          <button className="btn btn-primary">Order Now</button>
                        </a>
                      </div>
                      <p className="para">*Prices may vary on selected date.</p>
                    </div>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400&display=swap");

.menu{
  font-family: "Josefin Sans", sans-serif;
}

.main-heading {
  color: #5d4037;
}

.Item-inside {
  height: 220px;
  border-radius: 12px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.Item-inside:hover .img,
.Item-inside:hover .btn {
  transform: scale(1.1);
}

.img-div {
  padding: 0;
}

.img {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
}

.img-fluid {
  height: 220px;
}

.main-title{
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
}
.head{
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
}
.para{
  color: black;
  font-size: xx-small;
}


.price-book-divide {
  font-size: 20px;
  font-weight: 400;
  color: #4db6ac;
}
.headtwo{
  font-size: 20px;
  font-weight: 400;
  color: #4db6ac;

}

.price-book-divide {
  margin-bottom: 10px;
}

.row {
  margin-right: 0;
  margin-left: 0px;
}

.btn-primary {
  background-color: #4db6ac;
  outline: none;
  border: none;
  transition: all 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #00695c;
  outline: none;
  border: none;
}

.btn-warning:hover {
  background-color: black;
  color: whitesmoke;
  outline: none;
}
@media (max-width: 768px) {
  .menu img{
    visibility: hidde;
}
}

@media (max-width: 998px) {
  .menu img{
   visibility: hidde;
  }
}
`;

export default GalleryReact;
