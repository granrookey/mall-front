import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setUTCDate(expires.getUTCDate() + days)
    return cookie.set(name, value, {path:'/', expires:expires})
}

export const getCookie = (name) => {
    return cookie.get(name)
}

export const removeCookie = (name, path="/") => {
    cookie.remove(name, {path})
}