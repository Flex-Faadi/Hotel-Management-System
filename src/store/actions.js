import Firebase from '../config/Firebase'

/* 
==========================
FIREBASE ACCOUNT CREATION 
==========================
*/

const signupUser = (user,history) => {
    return (dispatch) => {
        Firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                Firebase.database().ref('/').child(`users/${res.user.uid}`).set(user)
                history.push("/")
                alert("User signup successfully")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

/* 
==========================
GET HOTEL DATA
==========================
*/
const getHoteldata = (uid) => {
    return (dispatch) => {
        Firebase.database().ref('/').child(`hotels`)
            .once('value', (data) => {
                var arr = []
                for (var key in data.val()) {
                    arr.push({ ...data.val()[key], id: key })
                }
                dispatch({ type: "GETALLDATA", hoteldata: arr })
                console.log(data.val())
            })
    }
}

/* 
=============================
FIREBASE USER LOGIN CREATION 
=============================
*/

const loginUser = (user,history) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    Firebase.database().ref('/').child(`users/${res.user.uid}`)
                        .once('value', (data) => {
                            dispatch({ type: "GETUSER", user: data.val() })
                            resolve(res.user.uid)
                        })
                        alert("Signin Successfullyy!!")
                        history.push("/")
                })
                .catch((err) => {
                    reject(err.message)
                })
        })
    }
}

/* 
==============================
FIREBASE SINGLE GET USER DATA
==============================
*/

// const getUser = (uid) => {
//     return (dispatch) => {
//         Firebase.database().ref('/').child(`users/${uid}`)
//             .once('value', (data) => {
//                 dispatch({ type: "GETUSER", user: { ...data.val(), id: uid } })
//             })
//     }
// }

/* 
============================
FIREBASE GET ALL USERS DATA
============================
*/

// const getAllUsers = (uid) => {
//     return (dispatch) => {
//         Firebase.database().ref('/').child(`users`)
//             .once('value', (data) => {
//                 var arr = []
//                 for (var key in data.val()) {
//                     arr.push({ ...data.val()[key], id: key })
//                 }
//                 dispatch({ type: "GETALLUSERS", allUsers: arr })
//             })
//     }
// }


/* 
=======================
FIREBASE SET USER DATA
=======================
*/

// const sendMessage = (message, user1, user2) => {
//     return (dispatch) => {
//         var mainID;
//         if (user1.id < user2.id) {
//             mainID = user1.id + user2.id
//         } else {
//             mainID = user2.id + user1.id
//         }
//         Firebase.database().ref('/').child(`chats/${mainID}`)
//             .push({
//                 user1,
//                 user2,
//                 message
//             })
//     }
// }


export {
    signupUser,
    loginUser,
    getHoteldata,
    // getUser,
    // getAllUsers
}