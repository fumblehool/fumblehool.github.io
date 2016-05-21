var Banner = React.createClass({

	render: function(){

		return(
			<div className="border">
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

	render: function(){

		return(

			<div className="border content">
			<center>
				<h1> Content section</h1>
				</center>
			</div>

		)
	}
});

var Footer = React.createClass({

	render: function(){

		return(

			<div className="border">
			<center>
				<h1> Footer section</h1>
				</center>
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
				< Content />
				< Footer />
				</div>
		)
	}
});

ReactDOM.render(
	<Main/>,
	document.getElementById("main_container")
);
