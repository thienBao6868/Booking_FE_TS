import jwtDecode from "jwt-decode";
interface MyToken {
  name: string;
  exp: number;
  // whatever else is in the JWT.
}
export const isVaLidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decode = jwtDecode<MyToken>(accessToken);
  const currentTime = Date.now() / 1000;
  return decode.exp > currentTime;
};
