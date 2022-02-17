import React from 'react'

import CurrentCoaches from '../components/CurrentCoaches'
import Hero from '../components/Hero'
import AppLayout from '../components/layouts/AppLayout'
import MailingList from '../components/MailingList'

export default function HomePage() {
  return (
    <AppLayout>
      <Hero />
      <CurrentCoaches />
      <MailingList />
    </AppLayout>
  )
}
