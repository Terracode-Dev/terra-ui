
import React, { useState } from 'react';
import {Email,emails} from  "@/components/base/ui/email"
import { ScrollBar } from "@/components/base/ui/scroll-area"
import { ScrollArea } from "@/components/base/ui/scroll-area"
import { Textarea } from "@/components/base/ui/textarea"
import { Button } from "@/components/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/base/ui/card"
import { Reply, Trash2 } from 'lucide-react';


const Notification: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(emails[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmails = emails.filter(email =>
    email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    email.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid md:gap-2 lg:grid-cols-2 xl:grid-cols-5">
      <Card className='col-span-2 p-2 shadow-xl'>
        <CardHeader>
          <CardTitle>Notification</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="mt-3 mb-4">
              <input type="text" placeholder="Search" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-black border-2 border-black border-solid rounded-md" />
            </div>
            <ScrollArea className="w-full border rounded-md h-[410px] p-4">
            <div className="space-y-4">
              {filteredEmails.map(email => (
                <div
                  key={email.id}
                  onClick={() => setSelectedEmail(email)}
                  className={`p-4 rounded-md cursor-pointer ${selectedEmail?.id === email.id ? ' bg-gray-400' : 'bg-white'}`}
                >
                  <h2 className="font-semibold">{email.sender}</h2>
                  <p className="text-gray-400">{email.subject}</p>
                  <p className="text-gray-600">{email.body.substring(0, 20)}...</p>
                  <p className="mt-2 text-xs text-gray-500">{email.date}</p>
                </div>
              ))}
            </div>
            </ScrollArea>
        </CardContent>
      </Card>
        
      <Card className='col-span-3 shadow-xl '>
        {selectedEmail && (
        <>
        <CardHeader className=''>
          <CardTitle>{selectedEmail.sender}</CardTitle>
          <CardDescription>{selectedEmail.subject}
            <Button variant='ghost' className='float-right'><Trash2 className=''/></Button>
            <Button variant='ghost' className='float-right'><Reply className=''/></Button>
          </CardDescription>
        </CardHeader>
        <CardContent className='pb-1 pl-6 pr-6'>
        <ScrollArea className="w-full p-4 border rounded-md h-96">
                <p className="mt-4 text-justify ">{selectedEmail.body}</p>
        </ScrollArea>
        </CardContent>
        </>
              )} 
              <div className='flex '>
                <div className='flex-grow w-full pl-6 pr-6'>
                  <form>
                  <div className='gap-4 '>
                    <Textarea placeholder="Type your message here." className='w-full '/>
                  </div>
                  <div className='flex justify-end pb-6 pr-0 '>
                    <Button type="submit" className="w-32 mt-4">Send message</Button>
                  </div>
                  </form>
                </div>
                
              </div>
    
        
      </Card>
    </div> 
  )
};

export default Notification;





    





