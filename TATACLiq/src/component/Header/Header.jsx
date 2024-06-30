import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = ["Products", "Brands", "Categories"];
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement search functionality here (e.g., filtering products or navigating)
    console.log("Searching for:", searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  
  return (
    <header>
      <div id="navContainer">
        <div></div>
        <div className="navMiddle">
          <div className="logoHolder">
            <img src={Logo} alt="tata-cliq_logo" />
          </div>
          <div className="navFunctHolder">
            <div className="topMiddleSection">
              <div>Tata CLiQ Luxury</div>
              <div className="topMiddleSection_Menu">
                <div className="loginDropdown">
                  <span id="signInText" className="loginBtn" style={{ cursor: 'pointer', padding: '10px 0' }}>Sign in/Sign Up</span>
                  <span id="profileIcon" className="loginBtn" style={{ display: 'none' }}>
                    <i className="fa-solid fa-circle-user"></i>&nbsp;&nbsp;&nbsp;
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                  <div className="loginDropdown-content">
                    <span><i className="fa-solid fa-sort-up"></i></span>
                    <button id="loginBtn" onClick={openNav}>Login/ Register</button>
                    <p><a href=""><i className="fa-regular fa-user"></i>&nbsp;&nbsp;&nbsp;My account</a></p>
                    <p><a href=""><i className="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;&nbsp;Order History</a></p>
                    <p><a href=""><i className="fa-regular fa-heart"></i>&nbsp;&nbsp;&nbsp;My Wishlist</a></p>
                    <p><a href=""><i className="fa-regular fa-bell"></i>&nbsp;&nbsp;&nbsp;Alerts & Coupon</a></p>
                    <p><a href=""><i className="fa-solid fa-gift"></i>&nbsp;&nbsp;&nbsp;Gift Card</a></p>
                    <p><a href=""><i className="fa-solid fa-money-bill-1-wave"></i>&nbsp;&nbsp;&nbsp;CLiQ Cash</a></p>
                    <p id="logOut" style={{ display: 'none' }}><a href='/'><i className="fa-solid fa-gear"></i>&nbsp;&nbsp;&nbsp;Log Out</a></p>
                  </div>
                </div>

                {/* SignIn / SignUP Window */}
                <div id="myNav" className={`overlay ${isNavOpen ? 'open' : ''}`}>
                  <div className="overlay-content" id="popBox">
                    <a href="" className="closebtn" id="popPlus" onClick={closeNav}>&times;</a>
                    <h1>Welcome to Tata</h1>
                    <h1>CLiQ</h1>

                    <div id="popMobileDiv">
                      <p className="inputMobile">Please enter your mobile number</p>
                      <div id="popMobile" className="numberInput">
                        <div>+91</div>
                        <div><input type="number" placeholder="Enter Mobile Number" id="popInpMob" /></div>
                      </div>
                      <h3 id="selectEmail">Use Email Address</h3>
                    </div>

                    <div id="popEmailDiv">
                      <p className="inputMobile">Please enter your email address</p>
                      <div id="popEmail" className="numberInput">
                        <div><input type="email" placeholder="Enter Email Address" id="popInpEmail" /></div>
                      </div>
                      <h3 id="selectMobile">Use Mobile Number</h3>
                    </div>

                    <p id="term">By continue you are agree to our <span className="termPolicy">Terms of Service</span> & <span className="termPolicy">Privacy Policy</span></p>

                    <button id="popBtn">Continue</button>
                  </div>

                  {/* OTP window section */}
                  <div className="overlay-content" id="popOtp" style={{ display: 'none' }}>
                    <a href="" className="closebtn" onClick={closeNav}>&times;</a>
                    <h1>Almost There</h1>

                    <div id="popMobileOtp">
                      <p className="inputMobile">Please enter the 6 digit OTP that we just sent</p>
                      <p className="inputMobile" id="dispopMob">on +91</p>
                      <div id="popMobOtp" className="numberInput"><input type="number" placeholder="Enter OTP 123456" id="inputmobOtp" style={{ paddingLeft: '15px' }} /></div>
                      <div id="otpBoxFlax" className="otpResend">
                        <p id="editMobile">Edit Number</p>
                        <p>Resend OTP</p>
                      </div>
                    </div>

                    <div id="popEmailOtp">
                      <p className="inputMobile">Please enter the 6 digit OTP that we just sent</p>
                      <p className="inputMobile" id="dispopEmal">on </p>
                      <div id="popeMalOtp" className="numberInput"><input type="number" placeholder="Enter OTP" id="inputmailOtp" style={{ paddingLeft: '15px', marginTop: '20px' }} /></div>
                      <div id="otpBoxFlax" className="otpResend">
                        <p id="editEmail">Edit Email</p>
                        <p>Resend OTP</p>
                      </div>
                    </div>

                    <button id="popOtpBtn">Continue</button>
                  </div>
                </div>
                {/* End OTP window section */}

                <div><a className="topMenu" href="">Track Orders</a></div>
                <div><a className="topMenu" href="">CLiQ Care</a></div>
                <div><a className="topMenu" href="">GiftCard</a></div>
                <div><a className="topMenu" href="">CLiQ Cash</a></div>
              </div>
            </div>

            <div className="bottomMiddleSection">
              <div>
                <div className="dropdown">
                  <span className="dropbtn cat" style={{ fontSize: '17px' }}>Categories <i className="fa-solid fa-angle-down navbarArrowDown" id="farc"></i></span>
                  <div className="dropdown-content">
                    <div id="blockshowCat">
                      <div id="listCat">
                        <a id="navWomen" href="">Women's Fashion <span id="navCat1"></span></a>
                        <hr />
                        <a id="navMen" href="">Men's Fashion <span id="navCat2"></span></a>
                        <hr />
                        <a id="navTv" href="">TV & Appliances <span id="navCat3"></span></a>
                        <hr />
                        <a id="navMobile" href="">Mobile Phones <span id="navCat4"></span></a>
                        <hr />
                        <a id="navElectronics" href="">Electronics <span id="navCat5"></span></a>
                        <hr />
                        <a id="navKid" href="">Kid's Fashion <span id="navCat6"></span></a>
                        <hr />
                        <a id="navHome" href="">Home Furnishings <span id="navCat7"></span></a>
                        <hr />
                        <a id="navBeauty" href="">Beauty <span id="navCat8"></span></a>
                      </div>
                      <table id="cateTable"></table>
                    </div>
                  </div>
                </div>

                <div className="dropdown_Br">
                  <span className="dropbtn_Br brand" style={{ fontSize: '17px' }}>Brands <i className="fa-solid fa-angle-down navbarArrowDown " id="farb"></i></span>
                  <div className="dropdown-content_Br">
                    <div id="blockshow">
                      <div id="listBrand">
                        <a id="brandTv" href="">TV & Appliances <span id="navbrn1"></span></a>
                        <hr />
                        <a id="brandElc" href="">Electronics <span id="navbrn2"></span></a>
                        <hr />
                        <a id="brandWomen" href="">Women's Wear <span id="navbrn3"></span></a>
                        <hr />
                        <a id="brandMen" href="">Men's Wear <span id="navbrn4"></span></a>
                        <hr />
                        <a id="brandFoot" href="">Footwear <span id="navbrn5"></span></a>
                        <hr />
                        <a id="brandJwel" href="">Jewellery <span id="navbrn6"></span></a>
                        <hr />
                        <a id="brandwatch" href="">Watches & Accessories <span id="navbrn7"></span></a>
                        <hr />
                        <a id="brandKid" href="">Kids <span id="navbrn8"></span></a>
                      </div>
                      <table cellPadding="0" id="brandTable"></table>
                      <div id="imgList">
                        <div>
                          <div>
                            <img src="https://assets.tatacliq.com/medias/sys_master/images/13957513642014.jpg" alt="" />
                          </div>
                          <div>
                            <img src="https://assets.tatacliq.com/medias/sys_master/images/13957513838622.jpg" alt="" />
                          </div>
                        </div>
                        <div>
                          <div>
                            <img src="https://assets.tatacliq.com/medias/sys_master/images/26728706506782.jpg" alt="" />
                          </div>
                          <div>
                            <img src="https://assets.tatacliq.com/medias/sys_master/images/13957513838622.jpg" alt="" />
                          </div>
                        </div>
                        <div>
                          <div>
                            <img src="https://assets.tatacliq.com/medias/sys_master/images/13957513773086.jpg" alt="" />
                          </div>
                          <div>
                            <img src="https://assets.tatacliq.com/medias/sys_master/images/13957513838622.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
              <div className="searchContainer">
                  <form onSubmit={handleSearchSubmit}>
                    <div className="searchInput">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input type="text" placeholder={`Search for ${placeholders[placeholderIndex]}`} value={searchQuery} onChange={handleSearchChange} />
                      {searchQuery && (
                        <span className="clearIcon" onClick={clearSearch}>
                          <i className="fa-regular fa-times"></i>
                        </span>
                      )}
                    </div>
                    <button type="submit" className="searchButton">
                      <i className="fa-solid fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div>
                <div><i className="fa-regular fa-heart"></i></div>
                <div><i className="fa-solid fa-bag-shopping"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
