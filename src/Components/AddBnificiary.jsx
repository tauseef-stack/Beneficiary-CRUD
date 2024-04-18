import Form from "./Form";
import "../styles/addBeneficiary.css"
import { useNavigate } from 'react-router-dom';



const AddBenificiary = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/")
    }


    return <div>
        <div className="add-form-heading">
            <div><p>Add Beneficiary</p></div>
        
        <button className="button edit" onClick={navigateHome}>Home</button>
        </div> 
        <Form/>
    </div>
}

export default AddBenificiary;