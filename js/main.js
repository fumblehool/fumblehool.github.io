var data = {
						["The first test post"],
						["The Second test post"],
						["The Third test post"]
};


var Banner = React.createClass({

	render: function(){

		return(
			<div className="">
			<center>
				<img className="banner" src="img/banner.jpg"/>
			</center>
			</div>
		)
	}
});

var Navbar = React.createClass({

	render: function(){

		return(
			<div>
			<header className="navbar navbar-inverse navbar-fixed-top bs-docs-nav">
        <div className="container">
            <div className="navbar-header">
               <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="index.html" className="navbar-brand">fumblehool</a>
            </div>
            <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                <form className="navbar-form navbar-right" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                    <button type="submit" className="btn btn-default"> Submit</button>
                </form>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </div>
    </header>
		</div>
		)
	}
});

var Content = React.createClass({
	//
	// fet_data: function(){
	// 	var Req = new XMLHttpRequest();
	// 	Req.onload = reqListener;
	// 	Req.open("get", "data.json", true);
	// 	Req.send();
	//
	// 	function reqListener(e) {
	// 	data = JSON.parse(this.responseText);
	// 	return data;
	// }

	render: function(){

		return(

			<div className="content">
			<center>
			<div className="page-header">
				<h1> Content section</h1>
			</div>
				</center>
			</div>

		)
	}
});

var Footer = React.createClass({

	render: function(){

		return(

			<div className="center content">
			<footer>
        <center>
        <hr/>
        <p class="text-center">
            Copyright © Daman. All rights reserved.
        </p>
        </center>
    </footer>
		</div>

		)
	}
});

var Main = React.createClass({

	render: function(){

		return(
			<div>
				< Navbar />
				< Banner />
				< Content data=data />
				< Footer />
				</div>
		)
	}
});

ReactDOM.render(
	<Main/>,
	document.getElementById("main_container")
);
