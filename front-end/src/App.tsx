import React from 'react';
import './App.css';

import { CurrentCoachesTable } from './CurrentCoachesTable'
import { MailingListForm } from './MailingListForm'

export const App = () => {
  return (
    <div>
    <h1>BetterLesson Professional Coaching</h1>
    <p>Professional Coach Seminars & Mentorship</p>
    <CurrentCoachesTable  />

    <MailingListForm />
    </div>
  )
}
