import { combineReducers } from 'redux';

import { TOGGLE_DATE, ADD_HABIT, DELETE_HABIT } from './actions.js';

const toggleDate = (habits, habit_title, date_ind) => {
  const newHabits = JSON.parse(JSON.stringify(habits));
  const habit_ind = newHabits.findIndex(habit => habit.title === habit_title);
  newHabits[habit_ind].dates[date_ind].isDone = !newHabits[habit_ind].dates[date_ind].isDone;
  return newHabits;
};

const habitListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_HABIT:
      return [
        ...state,
        {
          title: action.title,
          colour: action.colour,
          dates: Array.from({ length: action.num_days }, (val, key) => ({
            date: key + 1,
            ind: key,
            isDone: false,
            key: key,
          })),
        },
      ];
    case DELETE_HABIT:
      return state.filter(habit => {
        if (habit.title === action.habit_title) {
          return false;
        } else {
          return true;
        }
      });
    case TOGGLE_DATE:
        return toggleDate(state, action.habit_title, action.date_ind)
    default:
      return state;
  }
};


const reducer = combineReducers({
  habits: habitListReducer,
});

export default reducer;
