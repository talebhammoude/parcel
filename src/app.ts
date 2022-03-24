// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, onValue, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdAnlmX_mxn81UBIBOdlpZdiSmAjzmH10",
  authDomain: "fe21-js2-801d6.firebaseapp.com",
  databaseURL:
    "https://fe21-js2-801d6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fe21-js2-801d6",
  storageBucket: "fe21-js2-801d6.appspot.com",
  messagingSenderId: "150869399051",
  appId: "1:150869399051:web:de572bfe1333dcd22d990e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function readAllData () {

  const db = getDatabase(app); //Databasen
  const dbRef = ref(db, 'messages/' ); //En referens till hela databasen

  onValue(dbRef,  (snapshot) => {
  //  Vi får tillbaka en snapshot av databasen vid tidpunkten av ändringen

    
  //  vi kommer åt en lokal kopia av databasens innehåll i form av JS-objekt genom .val()
    const data = snapshot.val();

    
    const dataToArr = Object.values(data);
    console.log(dataToArr);
    dataToArr.forEach((element: any)=>{
      const theList = document.querySelector(".chat-box");
      const li = document.createElement("li");

      li.appendChild(document.createTextNode(element.username + ": "));
      li.appendChild(document.createTextNode(element.theMsg));
      theList.appendChild(li);


    })
    
  });
}

  
readAllData();


  const inputField = document.querySelector(".msg-input-field") as HTMLInputElement;
  const sendButton = document.querySelector(".send-btn") as HTMLInputElement;
  const theList = document.querySelector(".chat-box") as HTMLDivElement;




  function writeMsgData(userId: number, name: string, theMsg: string) {
    const db = getDatabase();
    set(ref(db, 'messages/' + userId), {
      username: name,
      theMsg: theMsg,
    });
  }


  sendButton.addEventListener("click", (e)=>{
    e.preventDefault();
    writeMsgData(Math.floor(Math.random() * 10), "Talang", inputField.value);
    theList.innerHTML= "";
    inputField.value = "";
    readAllData();
  });






