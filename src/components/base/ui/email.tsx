
export interface Email {
    id: number;
    sender: string;
    subject: string;
    body: string;
    date: string;
  }
  
   export  const emails: Email[] = [
    {
      id: 1,
      sender: "chamod dilsahn",
      subject: "project update",
      body: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
      date: "Oct 22, 2023, 10:00:00 AM"
    },
    {
      id: 2,
      sender: "nomin senmidu",
      subject: "project update",
      body: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
      date: "Oct 22, 2023, 11 months ago"
    },
    {
      id: 3,
      sender: "pasindu withanage",
      subject: "project update",
      body: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
      date: "about 2 year ago"
    },
    {
      id: 4,
      sender: "chamod dilsahn",
      subject: "project update",
      body: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
      date: "Oct 22, 2023, 10:00:00 AM"
    }
  ];
