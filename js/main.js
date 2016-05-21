var Banner = React.createClass({

	render: function(){

		return(
			<div idName="border">
			<center>
				<h1> Title</h1>
			</center>
			</div>
		)
	}
});

var Navbar = React.createClass({

	render: function(){

		return(
			<div className="border">
			<center>
				<h1> This is Navbar</h1>
			</center>
			</div>
		)
	}
});

var Content = React.createClass({

	render: function(){

		return(

			<div className="border">
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
				< Banner />
				< Navbar />
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
