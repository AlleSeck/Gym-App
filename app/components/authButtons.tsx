import { signIn } from 'next-auth/react';
import Image from "next/image";
import googlelogo  from "@/public/googlelogo.png";
export function CredentialsSignInButton() {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2"
      onClick={() => signIn('credentials')}
    > 
      <span>Sign in with Email</span>
    </button>
  );
}

export function GoogleSignInButton() {
    
    const handleClick = async() => {
        try{
            await signIn("google", {callbackUrl:"/"});
        }catch(error){
            console.log(error);
        }
        
    }
  return (
    <button
      className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2"
      onClick={handleClick}
    >
     <Image src={googlelogo} alt="Google Logo" width={20} height={20}/>
    
      <span>Sign in with Google</span>
    </button>
  );
}
