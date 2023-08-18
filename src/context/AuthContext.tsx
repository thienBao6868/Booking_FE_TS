import { ReactNode, createContext, useContext, useReducer } from "react";

interface Props {
  children: ReactNode;
  // any props that come into the component
}

// An enum with all the types of actions to use in our reducer
enum ActionKind {
  INITIALIZE = "AUTH.INITIALIZE",
  LOGIN_SUCCESS = "AUTH.LOGIN_SUCCESS",
  REGISTER_SUCCESS = "AUTH.REGISTER_SUCCESS",
  LOGOUT = " AUTH.LOGOUT",
  UPDATE_PROFILE = "AUTH.UPDATE_PROFILE",
  CHECK_EMAIL_SUCCESS = "AUTH.CHECK_EMAIL_SUCCESS"
}

// An interface for our actions
interface AuthAction {
  type: ActionKind;
  payload: any;
}

// An interface for our state
interface AuthState {
  isinitialize: boolean;
  isAuthenticated: boolean;
  user: any;
  isCheckEmail: boolean;
}
// An interface for our context 
interface ContextState {
  isinitialize: boolean;
  isAuthenticated: boolean;
  user: any;
  isCheckEmail: boolean;
  checkEmail:any
}

// Our reducer function that uses a switch statement to handle our actions
function reducer(state: AuthState, action: AuthAction) {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.CHECK_EMAIL_SUCCESS:
      return {
        ...state,
        isCheckEmail:true
      };

    default:
      return state;
  }
}

const AuthContext = createContext<ContextState>({
  isinitialize: false,
  isAuthenticated: false,
  user: null,
  isCheckEmail: false,
  checkEmail:()=>{}
});

function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, {
    isinitialize: false,
    isAuthenticated: false,
    user: null,
    isCheckEmail: false,
  });

  const checkEmail = (email: string) =>{
    dispatch({type:ActionKind.CHECK_EMAIL_SUCCESS ,payload:{email}})
  }

  return (
    <AuthContext.Provider value={{ ...state,checkEmail}}>{children}</AuthContext.Provider>
  );
}


export { AuthContext, AuthProvider };

// **********************0-0******************//
