import { useEffect, useState } from 'react';

const useIndexedDB = (contactId) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const dbRequest = indexedDB.open('whatsapp-db', 1);

      dbRequest.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('messages')) {
          db.createObjectStore('messages', { keyPath: 'id', autoIncrement: true });
        }
      };

      dbRequest.onsuccess = (e) => {
        const db = e.target.result;
        const transaction = db.transaction('messages', 'readonly');
        const store = transaction.objectStore('messages');
        const request = store.getAll();

        request.onsuccess = () => {
          setMessages(request.result.filter(msg => msg.contactId === contactId));
        };
      };
    };

    getMessages();
  }, [contactId]);

  const saveMessage = (contactId, message) => {
    const dbRequest = indexedDB.open('whatsapp-db', 1);

    dbRequest.onsuccess = (e) => {
      const db = e.target.result;
      const transaction = db.transaction('messages', 'readwrite');
      const store = transaction.objectStore('messages');
      store.add({ contactId, message, timestamp: Date.now() });
    };
  };

  return { messages, saveMessage };
};

export default useIndexedDB;
