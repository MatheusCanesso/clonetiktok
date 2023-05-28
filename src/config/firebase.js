import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB72p_nOs7omDxfY8UwgOtI_mHXK5v21-Q",
  authDomain: "tiktokclone-9ceec.firebaseapp.com",
  projectId: "tiktokclone-9ceec",
  storageBucket: "tiktokclone-9ceec.appspot.com",
  messagingSenderId: "136202383908",
  appId: "1:136202383908:web:79b627084788f205fddeb1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;