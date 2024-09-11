import axios from "axios";
import { API_SERVER_HOST } from "./productsApi";

const rest_api_key = "c210477e38c93adb2e4b568dcb938b8f"
const redirect_uri = "https://mallapi:8080/member/kakao"

const auth_code_path = "https://kauth.kakao.com/oauth/authorize"

const access_token_url = "https://kauth.kakao.com/oauth/token"

export const getKakaoLoginLink = () => {
    const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    return kakaoURL
}

export const getAccessToken = async (authCode) => {
    const header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    const params = {
        grant_type: "authorization_code",
        client_id: rest_api_key,
        redirect_uri: redirect_uri,
        code: authCode
    }
    const res = await axios.post(access_token_url, params, header);
    const accessToken = res.data.access_token

    return accessToken
}

export const getMemberWithAccesToken = async(accessToken) => {
    const res = await axios.get(`${API_SERVER_HOST}/api/member/kakao?accessToken=${accessToken}`)

    return res.data
}