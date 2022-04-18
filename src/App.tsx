import React from 'react';
import DropDown from './components/dropdown';

const featuresItems = [
  {
    imgUrl: 'images/icon-todo.svg',
    itemLabel: 'Todo List'
  },
  {
    imgUrl: 'images/icon-calendar.svg',
    itemLabel: 'Calender'
  },
  {
    imgUrl: 'images/icon-reminders.svg',
    itemLabel: 'Reminder'
  },
  {
    imgUrl: 'images/icon-planning.svg',
    itemLabel: 'Planning'
  }
]

function App() {
  return (
    <div>
     <DropDown items={featuresItems} label='Features' isDropdow={true}/>
    </div>
  );
}

export default App;
