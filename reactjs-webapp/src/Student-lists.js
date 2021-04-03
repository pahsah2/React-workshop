import React, { Component } from 'react';
import Student from './Student';
import { connect } from 'react-redux';
import * as action from './action';
class StudentLists extends Component {
    render() {
        const allStudents = this.props.studentsFromStore;
        let lists = (
            <div className="col-12 mx-auto">
                <div className="alert-info text-center pt-5 pb-5">ไม่พบข้อมูลนักเรียน</div>
            </div>
        );
        if(allStudents.length !== 0) {
            lists = allStudents.map(item => 
                (
                    <div className="col-12 col-sm-6 col-lg-4 mt-3" key={item.id}>
                       <Student data={item} /> 
                    </div>
                )
            );
        } 
        return (
            <div className="row"> 
                {lists}
            </div>
        )
    }
    componentDidMount() {
        this.props.getAllStudents();
    }
} 
const mapStateToProps = state => {
    return {
        studentsFromStore : state.students
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllStudents : () => {
            return dispatch(action.getStudentLists());
        } 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentLists);
