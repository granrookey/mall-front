import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccesToken } from "../../api/kakaoApi";
import useCustomLogin from "../../hooks/useCustomLogin";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { login } from "../../slices/loginSlice";
const KakaoRedirectPage = () => {
    const [searchParams] = useSearchParams()
    const {moveToPath, saveAsCookie} = useCustomLogin()
    //const dispatch = useDispatch()
    const authCode = searchParams.get("code")
    useEffect(() => {
        getAccessToken(authCode).then(accessToken => {
            console.log(accessToken)
            getMemberWithAccesToken(accessToken).then(memberInfo => {
                console.log("---------------------------------------");
                console.log(memberInfo);
                saveAsCookie(memberInfo)
                if (memberInfo && !memberInfo.social) {
                    moveToPath("/");
                } else {
                    moveToPath("/member/modify");
                }
            })
        })
    }, [authCode])
    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>
        </div>
    )
}
export default KakaoRedirectPage;
