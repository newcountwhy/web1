<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Subglacial Lake</title>
		<link href="https://fonts.googleapis.com/css?family=Turret+Road|Vibes&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Josefin+Sans&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/script.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script src="http://malsup.github.com/jquery.cycle2.js"></script>
        <link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
	</head>
	<body class="page-overview">
        
        <div id="header">
            
            <h1>subglacial lakes</h1>
            
            <div id="headerlogo">
                
                
                <a id="logo1" href="#tagert"><img src="images/shopping.png" alt="shoppinglogo">
                </a>
                        
                        
                        
                <a id="logo2" href="target"><img src="images/login logo.png" alt="loginlogo">
                </a>
                  
                
                
                
                <form action="/action_page.php">
                    <select name="language">
                        <option value="English">English</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Italian">Italian</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                       
                    </select>
                
                </form>
            </div>

        
        </div>
        
        <nav id="main-menu">
			
			<ul>
				<li class="current">
					<a href="#">Home</a>
				</li>
				<li>
					<div class="dropdown">
                        <a href="#"><span>Subglacial lake</span></a>
                    
                        <div class="dropdown-content">
                            <ul class="dropdown-lake">
                                <li class="firstdrop">
                                    <a href= "#"><span>Vostok Lake</span></a>
                                </li>
                                <li class="firstdrop">
                                    <a href= "#"><span>Ellsworth Lake</span></a>
                                </li>
                                <li class="firstdrop">
                                    <a href= "#"><span>Hodgson Lake</span></a>
                                </li>
                                <li class="firstdrop">
                                    <a href= "#"><span>Untersee Lake</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
				</li>
				<li>
                    <div class="dropdown">
                        <a href="#" target="_blank">Travel Guide</a>
                        <div class="dropdown-content">
                            <ul class="dropdown-travel">
                                <li class="firstdrop">
                                    <a href="#">Plan your trip</a>
                                    <div class="plan-trip">
                                        <ul class="dropdown-plan">
                                            <li class="seconddrop">
                                                <a href="#">Activities</a>
                                            </li>
                                            <li class="seconddrop">
                                                <a href="#">Prices</a>
                                            </li>
                                            <li class="seconddrop">
                                                <a href="#">Health Insurance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
				</li>
				     
				<li>
					<a href="#" target="_blank">Guided tours</a>
				</li>
				<li>
					<a href="#" target="_blank">Flight</a>
				</li>
				<li>
                    <div class="dropdown">
                        <a href="#" target="_blank">Hotels</a>
                        <div class="dropdown-content">
                            <ul class="dropdown-hotel">
                                <li class="firstdrop">
                                    <a href="#"><span>Icehotel</span></a>
                                </li>
                                <li class="firstdrop">
                                    <a href="#"><span>UnderWaterhotel</span></a>
                                </li>
                        </div>
                    </div>
				</li>
			</ul>

        </nav>
        
        <section class="flight-header">
            <h2>Flight to the Antactica</h2>
            <blockquote><em><b>Everyone can realize the meaning of his life from the long journey</b></em></blockquote>


        </section>

        <section id="flight">
            <form method="get" action="index.html">

                <fieldset id="fieldset1">
                    <legend>
                        Book detail
                    </legend>

                    <section id="detail-container">
                        <div id="place-container">
                            <input  type="text" name="from" placeholder="Departure Point"/>
                            <input type="text" name="to" placeholder="Destination"/>
                        </div>
                        <div id ="date-container">
                            <input class="form-element-date" type="date" placeholder="Depart"/>
                            <input class="form-element-date" type="date" placeholder="Return"/>
                        </div>
                        <section id="sub">
                            <button type="submit">Search</button>
                        </section>
                        <section id="flight-image">

                        </section>
                    </section>
                </fieldset>    
                
                
            </form>

        </section>
        
        <section id="service">
            <div class="titles">
                <h3>Services</h3>
            </div>
            <section id="service-details">
                <div class="details">
                    <img src="images/date1.png" alt="dateser">
                    <div class="p-and-h">
                        <h4>Arrive early or stay longer</h4>
                        <p>If you spend more time to stay at airport, we can arrange your flights and even help with additional nights of hotel accommodations.</p>
                    </div>
                </div>
                <div class="details">
                    <img src="images/flighlogo.png" alt="flightslogo">
                    <div class="p-and-h">
                        <h4>Request an upgrade</h4>
                        <p>Premium Economy and Business Class upgrades are avaliable for many flights. You can ask us about this service.</p>
                    </div>
                </div>
                <div class="details">
                    <img src="images/friend.jpg" alt="friends-logo">
                    <div class="p-and-h"> 
                    <h4>Fly with friends</h4>
                    <p>We can arrange for you to meet up with you travel companion at an aitport and set out together.</p>
                    </div>
                </div>

            </section>

        </section>
        
        <section id="question-and-ans">
            <div class="titles">
                <h3>FAQs</h3>
            </div>
            <em><h5>See below for more on general question and answer. If you have more question, you can all at +46 123 456, or send Email to 12345@mail.com</h5></em>
            <ul>
                
                <em><li>Which airline do you use?</li></em>
                <nav class="show-more-button">
                    <a href="features.html"></a>
                </nav>
                <section class="stats">
                    <p>We are dedicated to getting you to and from your destination with ease. When you book the flight, 
                        you can see the certain airlines of this flight. If you 
                        e like to fly with a certain airline, let us know- our 
                        team of travel experts will look into available options 
                        find a flight itinerary tailores to fit your preferences. </p>
                </section>
                
                <em><li>How many pieces of luggage should I bring with me? What are the weight limits?</li></em>
                <nav class="show-more-button">
                    <a href="features.html"></a>
                </nav>
                <section class="stats">
                    <p>You are allowd to bring a maximum of one piece of luggage or one carry-on bag. That makes you 
                        enjoy the travel more easily. Different airlines have different weight limits. Hence, you can 
                        get more information after booking the certain airlines, or contact us directly.</p>
                </section>
                
                <em><li>Can I upgrade to Premium Economy or Business Class on my flights?</li></em>
                <nav class="show-more-button">
                    <a href="features.html"></a>
                </nav>
                <section class="stats">
                    <p>You need to request to update to Premium Economy or Business Class. Please call 123-456-789 to 
                        speak with a member of our Customer Experience Team for more information about your options.</p>
                </section>
                
                <em><li>Can I change the travel dates, is it free?</li></em>
                <nav class="show-more-button">
                    <a href="features.html"></a>
                </nav>
                <section class="stats">
                    <p>Some of airlines provide this sevice for free. Please call +123 456 789 to speak with a member of 
                        our Customer Experience Team for more information.</p>
                </section>
                
                <em><li>Can you provide the car to help me get from the airport to my hotel?</li></em>
                <nav class="show-more-button">
                    <a href="features.html"></a>
                </nav>
                <section class="stats">
                    <p>Some of airlines provide this sevice for free. Please call +123 456 789 to speak with a member of 
                        our Customer Experience Team for more information.</p>
                </section>
                
                <em><li>Can I choose the seat near the window or near the aisle?</li></em>
                <nav class="show-more-button">
                    <a href="features.html"></a>
                </nav>
                <section class="stats">
                    <p>Picking that perfert seat is important, and we make general seat 
                        requests(such as window or aisle) whenever possible. Seating arrangement 
                        vary by airline, so please call +123 456 789 to speak with a member of our Customer Experience 
                        Team for more information.</p>
                </section>
            
            </ul>

            <section id="last-part">
                <div class="customer">
                    <h6>Service Customer</h6><br>
                    <a href="index.html" target="_blank">Contact Us &raquo;</a>
                    <a href="index.html" target="_blank">FAQs &raquo;</a>
                    <a href="index.html" target="_blank">Privacy Policy</a>
                </div>
                
                <div class="work">
                    <h6>Work with us</h6><br>
                    <a href="index.html" target="_blank">Suppliers &raquo;</a>
                    <a href="index.html" target="_blank">Travel Agencies &raquo;</a>
                </div>
                
                <div class="receivedeal">
                    <label for="form-email"><b>Receive our latest deals</b></label><br>
                    <div class="form-email-element">
                        <input type="text" name="email" id="form-email" placeholder="  Must be a vaild email address"/>
                    </div>
                </div>

            </section>


        </section>
