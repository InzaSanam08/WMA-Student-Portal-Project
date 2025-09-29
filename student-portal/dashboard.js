import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase Config
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

// Elements
const profileDiv = document.getElementById("profile");
const logoutBtn = document.getElementById("logoutBtn");

// Check if user is logged in
onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("User logged in:", user.uid);
    await loadProfile(user.uid);
  } else {
    alert("⚠️ Please login first!");
    window.location.href = "index.html";
  }
});

// Load Profile from Firestore
async function loadProfile(uid) {
  try {
    const docRef = doc(db, "students", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const profile = docSnap.data();
      profileDiv.innerHTML = `
        <p><b>Full Name:</b> ${profile.name}</p>
        <p><b>Class Timings:</b> ${profile.timings}</p>
        <p><b>Campus:</b> ${profile.campus}</p>
        <p><b>Teacher:</b> ${profile.teacher}</p>
        <p><b>Course:</b> ${profile.course}</p>
        <p><b>Email:</b> ${profile.email}</p>
      `;
    } else {
      profileDiv.innerHTML = "<p>No profile found!</p>";
    }
  } catch (error) {
    console.error("Error loading profile:", error);
    profileDiv.innerHTML = "<p>❌ Failed to load profile.</p>";
  }
}

// Logout
logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("✅ Logged out!");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Logout Error:", error);
    alert(error.message);
  }
});


