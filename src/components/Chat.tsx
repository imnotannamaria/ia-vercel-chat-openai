'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useChat } from 'ai/react'
import { ScrollArea } from './ui/scroll-area'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chatbot.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full h-[600px] space-y-4 pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm"
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>AM</AvatarFallback>
                    <AvatarImage src="https://github.com/imnotannamaria.png" />
                  </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://chatbot.design/images/chatbot/DIGITAL%20%28RGB%29/PNG/Mark_RGB_Blue.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">
                    {message.role === 'user' ? 'Usuário' : 'AI'}
                  </span>

                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
