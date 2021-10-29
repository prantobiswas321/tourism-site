import { useEffect, useState } from "react"
import initializeAuthentication from "../firebasConfig/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, SetIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

        // signInWithPopup(auth, googleProvider)
        //     .then(result => {
        //         console.log(result.user);
        //         setUser(result.user);
        //     })
        //     .catch(error => {
        //         setError(error.message);
        //     })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('Inside state change', user);
                setUser(user);
            }
            else {

            }
        })
    }, [auth])

    return {
        error,
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;