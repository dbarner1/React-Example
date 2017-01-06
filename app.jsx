var page1flag = true;

function Application(props) {

	function goToPage2 (e) {
		var page1 = document.getElementsByClassName("page1")[0];
		page1.className="page1 hideMe";
		var page2 = document.getElementsByClassName("page2")[0];
		page2.className="page2 showMe"
	  	console.log("button clicked!");
	 }

	 function goToPage3 (e) {
		var page2 = document.getElementsByClassName("page2")[0];
		page2.className="page1 hideMe";
		var page3 = document.getElementsByClassName("page3")[0];
		page3.className="page2 showMe"
	  	console.log("button clicked!");
	 }

	function Welcome(props) {	
	  return (
	  	<div className="header">
	    	<h1>{props.header}</h1>
	    	<p>{props.tagLine}</p>
	    </div>
	  );
	}

	Welcome.propTypes = {
		header: React.PropTypes.string,
		tagLine: React.PropTypes.string,
	}

	Welcome.defaultProps = {
		header:"Welcome to this amazing app!",
		tagLine: "This is the best app youll use.  Ever."
	}

	function Signup(props) {	
	  return (
	  	<div className="signUp">
	      		<label>Enter your email to launch app!</label>
	     		<input />
	     		<button id="signUp" onClick= {goToPage2}>Click Me</button>   	

	    </div>
	  );
	}

	function MoreAboutUs(props) {	
	  return (
	  	<div className="moreAboutUs">
	      	    <h2>Heres more about us</h2>
	     		<p>We are awesome. And great.</p>
	    </div>
	  );
	}

	function Walkthrough(props) {	
	  return (
	  	<div className="walkthrough">
	     		<p>So, here is what will happen</p>
	     		<img src="http://i2.cdn.cnn.com/cnnnext/dam/assets/170106125353-02-michelle-obama-0106-large-tease.jpg"/>
	    </div>
	  );
	}

	function Scoreboard(props) {
		return (
			<div class="scoreboard">
				<row>
				</row>
			</div>
		)
	}

    return (
    	<div className="globalWrapper">
	    	<div className="page1">
	     		<Welcome />
	     		<Signup />
	     		<MoreAboutUs />
	     	</div>

	    	<div className="page2 hideMe">
	     		<Welcome />
	     		<Walkthrough />
	     		<button onClick={goToPage3}>Lets Go!</button>
	     	</div>

	     	<div className="page3 hideMe">
	     		<Welcome />
	     		<Scoreboard />
	     	</div>
	     </div>
    );

}

				//Component
ReactDOM.render(<Application />, document.getElementById('globalContainer'));
