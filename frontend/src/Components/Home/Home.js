import React, { useState, useEffect } from "react";
import { logoutUser, coinUpadte } from "../../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import Base from "../Base";
import profileImg1 from "../Images/profile-img-1.png";
import profileImg2 from "../Images/profile-img-2.png";
import coin from "../Images/coin.png";
import menu from "../Images/menu.png";
import vector from "../Images/Vector.png";
import BodyImg from "../Images/BodyImg.png";
import lightening from "../Images/lightening.png";
import comment from "../Images/comment.png";
import share from "../Images/share.png";
import currency from "../Images/currency.png";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [leadCoins, setLeadCoins] = useState(0);
  const [netCoins, setNetCoins] = useState(0);
  const [grossCoins, setGrossCoins] = useState(0);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo);

  const updateHandler = (leadcoins) => {
    debugger
    dispatch(coinUpadte(leadcoins));
    navigate("/home");
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  // const userCoinUpdate = useSelector((state) => state.userCoinUpdate);
  // const { success: successUpdate } = userCoinUpdate;

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-end bg-light">
          <button
            className="btn btn-primary m-2"
            onClick={() => logoutHandler()}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="container">
        {/* user details */}
        <div className="row">
          <div className="col-1">
            <img src={profileImg1} alt="profileImg" />
          </div>
          <div className="col-3">
            <div>alfredo_rosser1</div>
            <div className="textLight">6 June 2021, 12:10 pm</div>
          </div>
          <div className="col-2 offset-4">
            <div>
              <img src={coin} alt="Coin" />
              <span>{userInfo.user.grosscoins}</span>
            </div>
            <div>Gross Coins</div>
          </div>
          <div className="col-1">
            <img src={vector} alt="Vector" />
          </div>
          <div className="col-1">
            <img src={menu} alt="Menu" />
          </div>
        </div>
        {/* post */}
        <div className="row justify-content-center">
          <img src={BodyImg} alt="BodyImg" />
        </div>
        {/* badges and lead button */}
        <div className="row">
          <div className="col-9">
            <div className="row">
              <span>
                <img src={lightening} alt="lightening" className="px-2" />
              </span>
              <span>
                <img src={comment} alt="comment" className="px-2" />
              </span>
              <span>
                <img src={share} alt="share" className="px-2" />
              </span>
            </div>

            <div>
              <p>50 interested</p>
            </div>
          </div>

          <div className="col-3 d-flex justify-content-end">
            <button
              className="leadBtn"
              onClick={() => {
                updateHandler(100);
              }}
            >
              {/* {"Lead +100 "}{" "} */}
              Lead+100
              <img src={currency} alt="currency" className="pl-1" />{" "}
            </button>
          </div>
        </div>
        {/* comments-details */}
        <div className="row">
          <div className="col-1 ">
            <img
              src={profileImg2}
              alt="profileImg2"
              style={{ height: "60px", width: "60px" }}
            />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-2">
                <img src={coin} alt="coin" />
              </div>
              <div className="col-2">
                <p>1100</p>
              </div>
              <div className="col-2">
                <img src={vector} alt="vector" />
              </div>
            </div>
            <div>
              <span>{userInfo.user.name}</span>
              <span className="textLightBold"> in Lead</span>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <span className="highlightBox p-1">144</span>
            <span className="p-1">:</span>
            <span className="highlightBox p-1">00</span>
            <span className="p-1">:</span>
            <span className="highlightBox p-1">00</span>
          </div>
        </div>
        <div className="row">
          <span>{"@alferdo r..  "}</span>
          <span>
            {
              "If everything seems under control, you're going fast enough. Be Fast, Be Curious..! 😎"
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
