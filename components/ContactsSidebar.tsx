import { useState } from 'react'
import { Search, UserPlus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AddContactPopup } from './AddContactPopup'

// Define the Contact type
interface Contact {
  id: number;
  name: string;
  avatar: string;
}

// Define the props for the ContactsSidebar component
interface ContactsSidebarProps {
  onSelectContact: (contact: Contact | null) => void;
}

const contacts: Contact[] = [
  { id: 1, name: 'Alice Johnson', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 2, name: 'Bob Smith', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 3, name: 'Charlie Brown', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 4, name: 'Diana Prince', avatar: '/placeholder.svg?height=32&width=32' },
]

export function ContactsSidebar({ onSelectContact }: ContactsSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddContactOpen, setIsAddContactOpen] = useState(false)
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null)

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddContact = () => {
    setIsAddContactOpen(true)
  }

  const handleCloseAddContact = () => {
    setIsAddContactOpen(false)
  }

  const handleSendInvite = (userId: number) => {
    // Implement invite sending logic here
    console.log(`Invite sent to user ${userId}`)
  }

  const handleContactClick = (contact: Contact) => {
    setSelectedContactId(contact.id)
    onSelectContact(contact)
  }

  return (
    <div className="w-64 bg-white border-r">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Contacts</h2>
        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search contacts"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button className="w-full mb-4" onClick={handleAddContact}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Contact
        </Button>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-200px)]">
        {filteredContacts.map(contact => (
          <div
            key={contact.id}
            className={`flex items-center p-3 cursor-pointer ${contact.id === selectedContactId ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            onClick={() => handleContactClick(contact)}
          >
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span>{contact.name}</span>
          </div>
        ))}
      </div>
      {isAddContactOpen && (
        <AddContactPopup onClose={handleCloseAddContact} onSendInvite={handleSendInvite} />
      )}
    </div>
  )
}
