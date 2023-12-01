import { useNavigate } from "react-router-dom";

function GoBack() {
    const navigate = useNavigate()
    const handlePrev = () => {
        navigate(-1)
    }
    return ( 
        <>
            <button className="btn_prev" onClick={handlePrev}>Prev</button>
        </>
     );
}

export default GoBack;