import { checkExits, register } from "../../services/usersService";
import {generateToken} from '../../helpers/generateToken';
import { useNavigate } from "react-router-dom";
import '../../components/GlobalStyles/GlobalStyles.scss';
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";

function Register() {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        
        const checkExitsEmail = checkExits("email", email);
        if (checkExitsEmail.length > 0) {
            alert("Tài khoản nãy đã tồn tại!");
        }else {
            const options = {
                fullName: fullName,
                email: email,
                password: password,
                token: generateToken()
            }
            const response = await register(options);
            if (response) {
                navigate("/login")
            }else {
                alert("Sai tài khoản hoặc mật khẩu!")
            }
        }
    }
    return ( 
        <>
            <div className="form_action">
                <form className="form_action--register" onSubmit={handleSubmit}>
                    <h2>Register Quick</h2>
                    <div>
                        <div className="form_input">
                            <input type="text" placeholder="FullName..."/> 
                            <FaUserAlt  className="icon-user"/> 
                        </div>
                        <div className="form_input">
                            <input type="email" placeholder="Email..."/>
                            <FaEnvelope className="icon-email"/>
                        </div>
                        <div className="form_input">
                            <input type="password" placeholder="Password..."/>
                            <FaLock className="icon-password"/>
                        </div>
                    </div>
                    <button className="btn_register" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </>
     );
}

export default Register;