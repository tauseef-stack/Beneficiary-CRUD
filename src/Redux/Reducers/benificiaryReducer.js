import { listOfAllBeneficieries } from "../../data";

const initialState = {
    beneficiaryList:listOfAllBeneficieries || null,
}

const beneficiaryReducer = (state=initialState,action) => {
    switch(action.type) {
        case "ADDONE":
            return {
                beneficiaryList:[...state.beneficiaryList,action?.payload],
            }
        case "EDIT":
            const index = state.beneficiaryList.findIndex((item)=> item.id===action.payload?.id);
            if(index!==-1) {
                const newArray = [...state.beneficiaryList];
                newArray[index] = action.payload;
                return {
                    beneficiaryList :newArray,
                }

            }
            return state
        case "DELETE":
            return {
                beneficiaryList:state.beneficiaryList?.filter((item)=> item.id !== action.payload),
            } 
        default:
             return state
    }
}

export default beneficiaryReducer;