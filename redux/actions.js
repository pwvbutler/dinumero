// action types
export const ADD_HABIT = 'ADD_HABIT';
export const DELETE_HABIT = 'DELETE_HABIT';
export const TOGGLE_DATE = 'TOGGLE_DATE';

// action creators
/*
export const addHabit = (title, colour, num_days) => ({
  type: ADD_HABIT,
  payload: { title, colour, num_days },
});

export const deleteHabit = habit_title => ({
  type: DELETE_HABIT,
  payload: habit_title,
});

export const toggleDate = (habit_title, date_ind) => ({
  type: TOGGLE_DATE,
  payload: { habit_title, date_ind },
});
*/

export const addHabit = (title, colour, num_days) => ({
  type: ADD_HABIT,
  title,
  colour,
  num_days,
});

export const deleteHabit = habit_title => ({
  type: DELETE_HABIT,
  habit_title,
});

export const toggleDate = (habit_title, date_ind) => ({
  type: TOGGLE_DATE,
  habit_title,
  date_ind,
});