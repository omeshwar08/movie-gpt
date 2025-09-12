/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utility/userSlice";
import { LOGO } from "./constants";
import { toogleGptSearchView } from "../utility/gptSearchSlice";
import { SUPPORTED_LANGUAGES } from "./constants";
import { changeLanguage } from "../utility/appConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //sign out
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearch = () => {
    dispatch(toogleGptSearchView())
  }
  const dispatch = useDispatch();
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsuscribe();
  }, []);
  const handleLanguageOptions = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="w-full absolute px-4 py-2 bg-gradient-to-b from-black to-transparent z-10 flex justify-between items-center">
      {/* Netflix Logo */}
      <img className="w-44" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div>
          <select className="bg-gray-900 m-2 p-2 text-white" onChange={(e) => handleLanguageOptions(e)}>
            {SUPPORTED_LANGUAGES.map(lang => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
          </select>
          <button
            className="font-semibold text-white bg-red-700 hover:bg-red-800 cursor-pointer px-4 py-2 rounded-md shadow-md transition duration-300 mx-4"
            onClick={handleGptSearch}
          >
            GPT Search
          </button>
          <button
            className="font-semibold text-white bg-red-700 hover:bg-red-800 cursor-pointer px-4 py-2 rounded-md shadow-md transition duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
