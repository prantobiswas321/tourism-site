import { useEffect, useState } from "react"
import initializeAuthentication from "../firebasConfig/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
        SetIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError('');
        }).finally(() => SetIsLoading(false));
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        else {
            //  console.log(email, password);
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    if (user.email) {
                        setError('');
                    }
                    else {
                        setError('Registration Successful');
                    }
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (!user.email) {
                    setError('Login Successful');
                }
                else {
                    setError('');
                }
            })
            .catch(error => {
                setError('Wrong password');
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('Inside state change', user);
                setUser(user);
            }
            else {

            }
            SetIsLoading(false);
        })
    }, [auth])

    return {
        error,
        user,
        signInUsingGoogle,
        logOut,
        handleEmail,
        handlePassword,
        handleRegister,
        handleLogin,
        isLoading
    }
}

export default useFirebase;