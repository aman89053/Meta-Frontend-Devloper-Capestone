import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const BookingTable = () => {
  return (
    <Wrapper>
    <div className="banner">
    <h2>BOOK YOUR TABLE NOW</h2>
    <div className="card-container">
      <div className="card-img">
      </div>
      <div className="card-content">
        <h3>Reservation</h3>
        <form>
          <div className="form-row">
            <select name="days">
              <option value="day-select">Select Day</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </select>
            <select name="hours">
              <option value="hour-select">Select Hour</option>
              <option value={10}>10: 00</option>
              <option value={10}>12: 00</option>
              <option value={10}>14: 00</option>
              <option value={10}>16: 00</option>
              <option value={10}>18: 00</option>
              <option value={10}>20: 00</option>
              <option value={10}>22: 00</option>
            </select>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="form-row">
            <input type="number" placeholder="How Many Persons?" min={1} />
            <NavLink to="/gallery">
            <input type="submit" value="BOOK TABLE"/>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  </div>
  </Wrapper>
 );
};
const Wrapper = styled.section`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    font-family: 'Poppins', sans-serif;
}
.banner{
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/banner-img.jpg") center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #edefee;
    padding-bottom: 20px;
}
.card-container{
    display: grid;
    grid-template-columns: 420px 420px;
}
.card-img{
    background: url("/images/card-img.jpg") center/cover no-repeat;
}
.banner h2{
    padding-bottom: 40px;
    margin-bottom: 20px;
}
.card-content{
    background: #f4ce14;
    height: 430px;
}
.card-content h3{
    text-align: center;
    color: #000;
    padding: 25px 0 10px 0;
    font-size: 26px;
    font-weight: 700;
}
.form-row{
    display: flex;
    width: 90%;
    margin: 0 auto;
}
form select, form input{
    display: block;
    width: 100%;
    margin: 15px 12px;
    padding: 5px;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    outline: none;
    border: none;
    border-bottom: 1px solid #eee;
    font-weight: 300;
}
form input[type = text], form input[type = number], form input::placeholder, select{
    color: #9a9a9a;
}
form input[type = submit]{
    color: #fff;
    background: #495e57;
    padding: 12px 0;
    border-radius: 4px;
    cursor: pointer;
}
form input[type = submit]:hover{
    opacity: 0.9;
}
@media(max-width: 992px){
    .card-container{
        grid-template-columns: 100%;
        width: 100vw;
    }
    .card-img{
        height: 330px;
    }
}
`;

export default BookingTable;