import axios from "axios";
import { API_SERVER_HOST } from "./productsApi";

const rest_api_key = "${kakao_rest_api}"
const redirect_uri = "https://port-0-mallapi-4fju66f2clmu7lni8.sel5.cloudtype.app/member/kakao"

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
