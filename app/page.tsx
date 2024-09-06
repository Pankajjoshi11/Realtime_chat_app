'use client'
import { useState } from 'react'
import { ContactsSidebar } from '../components/ContactsSidebar'
import { ChatSection } from '../components/ChatSection'

interface Contact {
  id: number
  name: string
  avatar: string
}

export default function ChatApp() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  return (
    <div className="flex h-screen bg-gray-100">
      <ContactsSidebar onSelectContact={setSelectedContact} />
      <ChatSection selectedContact={selectedContact} />
    </div>
  )
}
