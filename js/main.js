var data = [
          {post:'The first test post'},
          {post:'The Second test post'},
          {post:'The Third test post'}
 ];

var nav_data = ['Home','Contact','About'];

var Post = React.createClass({
    render: function(){
        return(
 	    <div className="">
 	    <center>
	    <p className="jumbotron less-top-padding">
                {this.props.title}<br/>
                {this.props.data}
            </p><br/>
            </center>
            </div>
 	)}
 });

var Banner = React.createClass({
    render: function(){
        return(
	    <div className="">
	    <center>
	        <img className="banner" src="img/banner.jpg"/>
	    </center>
	    </div>
	)}
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
        var row = [];
        this.props.data.forEach(function(dt){
            row.push(<Post data={dt.post} title="Post Title"/>);
	});

        return(
            <div className="content">
	    <center>
            <div className="page-header">
                <h1> Posts</h1>
            </div>
            {row}
            </center>
            </div>
	)}
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
	)}
});

var Navbar = React.createClass({
    getInitialState: function(){
        return{ focused:  0 };
    },

    clicked: function(number){
        this.setState({
            focused: number
        })
    },

    render: function(){
        var self = this;
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
                    {this.props.items.map(function(item,m){
                    var style = '';
                    if ( self.state.focused == m){
                        style = 'active'
                    }
                return <li className={style} onClick={self.clicked.bind(self,m)}><a href="#">{item}</a></li>
                })}
                </ul>
                </nav>
                </div>
            </header>
            </div>
	)}
});

var Main = React.createClass({
    render: function(){
        return(
	    <div>
	        < Navbar items={nav_data} />
	        < Banner />
	        < Content data={data} />
	        < Footer />
	    </div>
    )}
});

ReactDOM.render(
    <Main/>,
    document.getElementById("main_container")
);
