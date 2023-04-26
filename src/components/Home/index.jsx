import { auth } from "@/services/firebase";
import { signOut } from "firebase/auth";

const HomeComponent = () => {
    const logout = async () => {
        await signOut(auth);
      };

    return ( 
        <div>
            Home Component

            <button onClick={logout}>
              
              <span>Sair</span>
            </button>
        </div>
     );
}
 
export default HomeComponent;