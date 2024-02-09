import Usuario from './Usuario';

interface UserContextType{
    user:Usuario | null;
    setUser:(user:Usuario)=>void
}

export default UserContextType;
