// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase Project Config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIQE2YI1X_6odqLB4cEG9KDYO0O3YRwfg",
  authDomain: "wma-loginsignup-project.firebaseapp.com",
  projectId: "wma-loginsignup-project",
  storageBucket: "wma-loginsignup-project.appspot.com",  // ✅ fixed
  messagingSenderId: "484491310617",
  appId: "1:484491310617:web:af7733cd49c7cafc16dc88",
  measurementId: "G-0CMFR093LC"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Buttons
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// ✅ Signup
signupBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful! Please login now.");
    console.log("User Created:", userCredential.user.uid);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});

// ✅ Login
loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    console.log("User Logged In:", userCredential.user.uid);

    // Redirect to registration form
    window.location.href = "register.html";
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});

// ✅ Save Profile (Firestore)
export async function saveProfile(uid, profileData) {
  await setDoc(doc(db, "students", uid), profileData);
  console.log("Profile Saved!");
}

// ✅ Load Profile (Firestore)
export async function loadProfile(uid) {
  const docSnap = await getDoc(doc(db, "students", uid));
  if (docSnap.exists()) {
    console.log("Profile Data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No profile found!");
    return null;
  }
}
