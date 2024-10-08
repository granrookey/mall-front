import { Suspense, lazy } from "react";
import LogoutPage from "../pages/member/LogoutPage";
const Loading = <div>Loading....</div>
const Login = lazy(() => import("../pages/member/LoginPage"))
const KakaoRedirect = lazy(() => import("../pages/member/kakaoRedirectPage"))
const MemberModify = lazy(() =>import("../pages/member/ModifyPage"))
const memberRouter = () => {
    return [
        {
            path: "login",
            element: <Suspense fallback={Loading}><Login /></Suspense>
        },
        {
            path: "logout",
            element: <Suspense fallback={Loading}><LogoutPage /></Suspense>,
        },
        {
            path: "kakao",
            element: <Suspense fallback={Loading}><KakaoRedirect /></Suspense>,
        },
        {
            path: "modify",
            element: <Suspense fallback={Loading}><MemberModify /></Suspense>,
        },
    ]
}
export default memberRouter
