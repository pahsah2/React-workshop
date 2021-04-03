import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from './action';
class Student extends Component {
    render() {
        const delFn = this.props.deleteStudentAtStore;
        return (
            <div className="card">
                <div className="card-header">
                    name: {this.props.data.name}
                    <button 
                        className="btn btn-outline-danger btn-sm float-right ml-1"
                        onClick={delFn.bind(this, this.props.data.id)}
                   >ลบ</button>                 
                   <Link to={`/edit/${this.props.data.id}`}>
                        <button 
                            className="btn btn-success btn-sm float-right"
                        >แก้ไข</button>
                   </Link>
                </div>
                <div className="card-body">
                    email: {this.props.data.email}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteStudentAtStore : (id) => {
            return dispatch(action.delStudent(id));
        } 
    }
}
export default connect(null, mapDispatchToProps)(Student);
