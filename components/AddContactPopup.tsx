import { useState } from 'react'
import { X, Search, UserPlus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const allUsers = [
  { id: 5, name: 'Eva Green', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 6, name: 'Frank Castle', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 7, name: 'Grace Hopper', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 8, name: 'Harry Potter', avatar: '/placeholder.svg?height=32&width=32' },
]
interface User {
    id: number
    name: string
    avatar: string
  }
  
  // Define the props interface for AddContactPopup
  interface AddContactPopupProps {
    onClose: () => void
    onSendInvite: (userId: number) => void
  }

export function AddContactPopup({ onClose, onSendInvite }: AddContactPopupProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Contact</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search users"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-y-auto flex-grow">
          {filteredUsers.map(user => (
            <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-100">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span>{user.name}</span>
              </div>
              <Button size="sm" onClick={() => onSendInvite(user.id)}>
                <UserPlus className="h-4 w-4 mr-2" />
                Invite
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}