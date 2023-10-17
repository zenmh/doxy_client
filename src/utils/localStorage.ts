import jwtDecode from "jwt-decode";

const storeUserInfoInLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === undefined) return;
  else return localStorage.setItem(key, token);
};

const getUserInfoFromLocalStorage = (key: string) => {
  if (
    !key ||
    typeof window === "undefined" ||
    typeof localStorage === "undefined"
  ) {
    return undefined;
  }
  const storedToken = localStorage.getItem(key);
  if (storedToken) {
    return jwtDecode(storedToken);
  }
  return undefined;
};

const removeUserFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") return;
  else localStorage.removeItem(key);
};

export {
  storeUserInfoInLocalStorage,
  getUserInfoFromLocalStorage,
  removeUserFromLocalStorage,
};
