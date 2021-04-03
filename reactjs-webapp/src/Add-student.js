import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './action';
class AddStudent extends Component {
    state = {
        name: '',
        email: ''
    }
    onChangeData = (event) => {
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }
    onSubmitStudentForm = (data, event) => {
        event.preventDefault();
        const newData = {
            name: data.name,
            email: data.email
        }
        this.props.addStudentAtStore(newData);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="row mt-3 mb-5 ml-5 mr-5">
                <div className="card col-12 col-sm-8 col-lg-6 mx-auto">
                    <div className="card-body">
                        <form onSubmit={this.onSubmitStudentForm.bind(this, this.state)}>
                            <div className="block-4 text-center">
                                <img 
                                    className="img img-thumbnail mt-5 mb-3" 
                                    src="http://lorempixel.com/150/150/sports/" alt="โลโก้"
                                />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="name" 
                                    value={this.state.name}
                                    onChange={this.onChangeData} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.onChangeData} />
                                </div>
                            
                            <div className="form-group text-center pt-3">
                                <button 
                                    onClick={() => this.props.history.push('/')}
                                    className="btn btn-outline-success btn-sm mr-1">ยกเลิก</button>
                                <button 
                                    type="submit" 
                                    className="btn btn-sm btn-primary ml-1">เพิ่ม</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addStudentAtStore : (newStudentData) => {
            return dispatch(action.addStudent(newStudentData));
        } 
    }
}
export default connect(null, mapDispatchToProps)(AddStudent);
