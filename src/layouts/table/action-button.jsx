var NewComponent = React.createClass({
    render: function () {
        return (

            <div className="btn-group">
                <button type="button" className="btn btn-info" fdprocessedid="t28amo">Action</button>
                <button type="button" className="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown" fdprocessedid="t27eta" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu" role="menu" style={{}}>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
        );
    }
});