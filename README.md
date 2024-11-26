
# WhatsApp Web-like Chat Application

A React-based real-time chat application inspired by WhatsApp Web. The application includes a contact list, chat window, and message input box. It uses **IndexedDB** for offline capabilities and is styled to resemble a professional messaging app.

## Deployment Link-
https://whats-app-web-zeta.vercel.app/



<img width="940" alt="Screenshot 171" src="whatsappWeb\public\Screenshot (171).png">




## Features

- **Contact List**: Displays a list of contacts on the left sidebar.
- **Chat Window**: Shows the chat history of the selected contact.
- **Message Input**: Allows users to send new messages.
- **Real-Time Message Storage**: Integrates with InstantDB for storing messages in real time.
- **Offline Mode**: Uses IndexedDB to cache messages locally for offline access.
- **Modern UI**: Designed with responsive and user-friendly CSS.

---

## Project Structure

    ```plaintext
    src/
    ├── components/
    │   ├── ContactList.js
    │   ├── ChatWindow.js
    │   ├── MessageInput.js
    ├── context/
    │   ├── AppContext.js
    ├── styles/
    │   ├── App.css
    │   ├── ContactList.css
    │   ├── ChatWindow.css
    │   ├── MessageInput.css
    ├── App.js
    ├── index.js


## Installation
 ### Clone the Repository
``bash
git clone https://github.com/Richasi/WhatsAppWeb
cd whatsapp-clone

 ### Install Dependencies
Run the following command to install the necessary packages:

``bash
npm install

# or
yarn install
Run the Application

 ### Start the development server:

``bash
npm start
# or
yarn start
Open the app in your browser at http://localhost:3000.


## Usage
- View the Contact List on the left side of the app.
- Click on a contact to view the chat window on the right side.
- Type messages in the input field and click "Send" to add messages to the chat.

  
## Technologies Used
- React.js: Core framework for building the user interface.
- IndexedDB: Provides offline storage for messages and contacts.
- InstantDB: Used for real-time message storage and retrieval.
- CSS3: Styled with responsive and modern techniques (Flexbox, Grid, etc.).

