import { openDB } from "idb";

const useIndexedDB = () => {
  const initDB = async () => {
    const db = await openDB("whatsapp-clone", 1, {
      upgrade(db) {
        db.createObjectStore("messages", { keyPath: "id", autoIncrement: true });
      },
    });
    return db;
  };

  const saveMessageOffline = async (message) => {
    const db = await initDB();
    const tx = db.transaction("messages", "readwrite");
    await tx.store.add(message);
    await tx.done;
  };

  const getOfflineMessages = async () => {
    const db = await initDB();
    const tx = db.transaction("messages", "readonly");
    return await tx.store.getAll();
  };

  return { saveMessageOffline, getOfflineMessages };
};

export default useIndexedDB;
