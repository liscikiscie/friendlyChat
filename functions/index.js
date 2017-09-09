// Import the Firebase SDK for Google Cloud Functions.
const functions = require('firebase-functions');
// Import and initialize the Firebase Admin SDK.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Adds a message that welcomes new users into the chat.
exports.addWelcomeMessages = functions.auth.user().onCreate(event => {
    const user = event.data;
    console.log('A new user signed in for the first time.');
    const fullName = user.displayName || 'Anonymous';

// Saves the new welcome message into the database
// which then displays it in the FriendlyChat clients.
    return admin.database().ref('messages').push({
        name: 'Firebase Bot',
        photoUrl: '/images/firebase-logo.png', // Firebase logo
        text: `${fullName} signed in for the first time! Welcome!` // Using back-ticks.
    });
});

// Note: You will edit this file in the follow up codelab about the Cloud Functions for Firebase.

// TODO(DEVELOPER): Import the Cloud Functions for Firebase and the Firebase Admin modules here.

// TODO(DEVELOPER): Write the addWelcomeMessages Function here.

// TODO(DEVELOPER): Write the blurOffensiveImages Function here.

// TODO(DEVELOPER): Write the sendNotifications Function here.
