import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export default defineNuxtPlugin(() => ({
  provide: {
    auth: {
      createUser,
      passwordReset,
      login,
      logout,
    },
  },
}));

async function createUser(email: string) {
  // Generate random password
  const password = (Math.random() + 1).toString(36).substring(2);

  const auth = getAuth();
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // If an error already occured abort and return the error message
    if (typeof result === 'string') {
      return result;
    }

    return passwordReset(email);
  }
  catch (err) {
    return err.code;
  }
}

async function passwordReset(email: string) {
  const auth = getAuth();
  try {
    await sendPasswordResetEmail(auth, email);
  }
  catch (err) {
    if (err instanceof FirebaseError) {
      const firebaseError = err as FirebaseError;
      if (firebaseError.code === 'auth/user-not-found') {
        throw new Error('no-error');
        // throw new Error('Wrong email or password');
      }
    }
    throw new Error('Something went wrong. Please try again later.');
  }
}

async function login(email: string, password: string) {
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
  }
  catch (err) {
    if (err instanceof FirebaseError) {
      const firebaseError = err as FirebaseError;
      if (firebaseError.code === 'auth/wrong-password' || firebaseError.code === 'auth/user-not-found') {
        throw new Error('Wrong email or password');
      }
    }
    throw new Error('Something went wrong. Please try again later.');
  }
}

function logout() {
  const auth = getAuth();
  return auth.signOut();
}
