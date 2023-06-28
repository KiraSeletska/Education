const initialState = [
    {id:1, title: 'Task# 123'},
    {id:2, title: 'Task# 78'},
    {id:3, title: 'Task# 556'},
    {id:4, title: 'Task# 32'},
    {id:5, title: 'Task# 215'},
]


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELET':
            return state.filter(task => task.id !== action.payload)
          default:
            return state;
        }
  }
