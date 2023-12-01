import { useNavigate } from "react-router-dom";
import { login } from "../../services/usersService";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import '../../components/GlobalStyles/GlobalStyles.scss';
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const response = await login(email, password);
        if (response.length > 0) {
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("email", response[0].email, 1);
            setCookie("token", response[0].token, 1);
            dispatch(checkLogin(true))
            navigate("/")
        }else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    }
    return ( 
        <>
            <div className="form_action">
                <form className="form_action--login" onSubmit={handleSubmit}>
                    <h2 className="">Login Quick</h2>
                    <div>
                        <div className="form_input">
                          <input type="email" placeholder="Email!" />
                          <FaEnvelope className="icon-email"/>  
                        </div>
                        <div className="form_input">
                          <input type="password" placeholder="Password"/>
                            <FaLock className="icon-password"/>
                        </div>
                        <div className="form_attention">
                            <div className="form_attention--item">
                                <input type="checkbox" />
                                <p>Rememeber me</p>
                            </div>
                            <div className="form_attention--item">
                                <p>Forgot Password?</p>
                            </div>
                        </div>
                        
                    </div>
                    <button className="btn_login" type="Submit">
                        Login
                    </button>
                </form>
            </div>
        </>
     );
}

export default Login;