import React from 'react'
import { ChatInterface } from "@/components/chat-interface"

export default function Component() {

  return (
    <ChatInterface 
      chats={["asdf", "ghjk"]} 
      friends={["Ahmad", "Bob"]}
    />
  )
}
