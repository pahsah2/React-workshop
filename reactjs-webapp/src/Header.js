import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {
        collapse: false
    }
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto text-center">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" 
            type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"
                onClick={() => {
                    this.setState({ collapse: !this.state.collapse} );
                }}
            ></span>
        </button>
        <div className={
                this.state.collapse?
                'collapse navbar-collapse show text-center':
                'collapse navbar-collapse'
        }>
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">All Students</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/add">Add Student</Link>
            </li>
            </ul>
        </div>
        </nav>
    )
  }
}
export default Header;
