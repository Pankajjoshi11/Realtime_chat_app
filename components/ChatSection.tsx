import { useState } from 'react'
import { Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Define the types for the contact and messages
interface Contact {
  name: string
  avatar: string
}

interface Message {
  sender: 'You' | 'Other'
  text: string
}

interface ChatSectionProps {
  selectedContact: Contact | null
}

export function ChatSection({ selectedContact }: ChatSectionProps) {
  const [message, setMessage] = useState<string>('')
  const [chatHistory, setChatHistory] = useState<Message[]>([])

  const sendMessage = () => {
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, { sender: 'You', text: message }])
      setMessage('')
      // Here you would typically send the message to a backend service
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      {selectedContact ? (
        <>
          <div className="bg-white p-4 border-b">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                <AvatarFallback>{selectedContact.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">{selectedContact.name}</h2>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
  {chatHistory.map((msg, index) => (
    <div
      key={index}
      className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
        >
        <div className={`max-w-xs mx-2 p-3 rounded-lg ${
            msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } overflow-auto`}
            style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
        >
            {msg.text}
        </div>
        </div>
            ))}
    </div>
          <div className="bg-white p-4 border-t">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button onClick={sendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500 text-xl">Select a contact to start chatting</p>
        </div>
      )}
    </div>
  )
}
