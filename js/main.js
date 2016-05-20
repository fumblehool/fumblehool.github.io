var Banner = React.createClass({

	render: function(){

		return(
			<center>
				<h1> Title</h1>
			</center>
		)
	}
});

var Navbar = React.createClass({

	render: function(){

		return(
			<center>
				<h1> This is Navbar</h1>
			</center>
		)
	}
});

var Content = React.createClass({

	render: function(){

		return(

			<div>
			<center>
				<h1> Content section</h1>
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
				</div>
		)
	}
});

ReactDOM.render(
	<Main/>,
	document.getElementById("main_container")
);
