import {useSelector,useDispatch} from "react-redux";
import "../styles/allBenificiaryTable.css"
import { deleteOneBinificiary } from "../Redux/Actions/beneficiaryAction";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const list = useSelector((state)=> state.beneficiaryReducer.beneficiaryList);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleNavigateToAdd = () => {
        navigate("/add")
    }

    const deleteBinificiary = (id) => {
        toast.error("Beneficiary deleted successfully",{toastId: id,autoClose:2000});
        dispatch(deleteOneBinificiary(id));
    }

    const editBinificiary = (id) => {
        navigate(`/edit/${id}`)
    }

    return <div>
        <div className="Heading-container">
            <div><p>List of All Beneficiary</p></div>
            <button className="button edit" onClick={handleNavigateToAdd}>Add Benificiary</button>
        </div>
        <div className="table-container">
        <table >
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Country</th>
          <th>Pin Code</th>
          <th>Edit</th>
          <th>Delete</th>

        </tr>
      {
        list?.[0] ? list.map(({ id, fullName, address, country,pinCode},index) => (
            <tr key={id}>
          <td>{index}</td>
          <td>{fullName}</td>
          <td>{address}</td>
          <td>{country}</td>
          <td>{pinCode}</td>
          <td><button className="edit button" onClick={()=>editBinificiary(id)}>Edit</button></td>
          <td><button className="delete button" onClick={()=>deleteBinificiary(id)}>Delete</button></td>
        </tr>
        )) : "No Benificiary found kindly add some"
      }
        
      </table>
        </div>
    </div>
}

export default Home;