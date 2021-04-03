const initialState = {
    students: []
}
const reducer = (state = initialState, action) => {
    const allStudents = [...state.students];
    switch(action.type) {
        case 'GET_STUDENT_LISTS':
            const allStudentsState = {
                ...state,
                students: action.playload
            }
            return allStudentsState;
        case 'DEL_STUDENT':
            const newState = {
                ...state,
                students: state.students.filter(item => item.id !== action.playload)
            }
            return newState;
        case 'ADD_STUDENT':
            const addedState = {
                ...state,
                students: [action.playload, ...state.students]
            }
            return addedState;
        case 'EDIT_STUDENT':
            const indexForEdit = allStudents.findIndex((item) => {
                return item.id === action.playload.id;
            });
            console.log('index for editing',indexForEdit);
            allStudents[indexForEdit] = {
                id: action.playload.id,
                name: action.playload.name,
                email: action.playload.email
            }
            const editedState = {
                ...state,
                students: allStudents
            }
            return editedState;
        default:
            break;
    }
    return state;
}
export default reducer;
