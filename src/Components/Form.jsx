import {useForm} from "react-hook-form";
import { generateId, selectStyles } from "../commonFunctions";
import cn from "classnames";
import Select from "react-select";
import "../styles/form.css"
import { useEffect, useMemo, useRef, useState } from "react";
import { countriesList } from "../data";
import { useDispatch } from 'react-redux';
import { addOneBinificiary, editBinificiary } from "../Redux/Actions/beneficiaryAction";
import {toast} from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Form = () => {
    const list = useSelector((state)=> state.beneficiaryReducer.beneficiaryList);
   const submitBtnRef = useRef();
   const [country, setCountry] = useState({
    label: "India",
    value: "India",
  });
  const [selectChange, setSelectChange] = useState(false);
  const [defaultCountry, setDefaultCountry] = useState(
    {
        label: "India",
        value: "India",
      }
  );

  const {Id} = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isDirty },
      } = useForm({
        defaultValues: {
          id:generateId(),
          fullName: "",
          address:"",
          country: "",
          pinCode: "",
        },
        mode: "onChange",
      });

      const handleAddAndUpdate = (data) => {
        if(Id) {
            dispatch(editBinificiary(data));
            navigate("/");
            toast.info("Befiniciary Edited Successfully",{toastId:data?.id,autoClose:2000})
        }
        else {
        dispatch(addOneBinificiary(data));
        navigate("/");
        toast.info("Befiniciary Added Successfully",{toastId:data?.id,autoClose:2000});
        }
      }

      const validateInput = (value) => {
        if (value.length > 6) {
          return "Pincode cannot exceed 6 characters";
        }
        return true;
      };


      const handleSelectCountry = (
        item,
        field
      ) => { 
       if (field === "country") {
          setCountry(item);
          if(country?.value !== item?.value) {
            setSelectChange(true)
          }
        }
      };

      const modifyCountryList = useMemo(() => {
        return (
          countriesList?.map((country) => {
            return { label: country, value: country };
          }) ?? []
        );
      }, []);

      useEffect(()=> {
        if(country) {
         setValue("country",country?.value)
        }
       },[country,setValue])

      useEffect(()=> {
        if(Id) {
            const beneficiaryToEdit = list?.find((item)=> item.id === Id);
            if(beneficiaryToEdit) {
                const { id,
                    fullName,
                    address,
                    country,
                    pinCode} = beneficiaryToEdit
                reset(
                    {
                        id,
                        fullName,
                        address,
                        country,
                        pinCode
                    },
                    {
                      keepErrors: true,
                      keepDirtyValues: true,
                    }
                  );
                  setCountry({
                    label: country,
                    value: country
                  });
            }
        }
      },[Id,list,reset])

      useEffect(() => {
        if(Id) {
            const defaultSelectCountry =
          modifyCountryList.find(
            (country) => country.label === Id
          ) ?? null;
        setDefaultCountry(defaultSelectCountry);
        }
        
      }, [modifyCountryList, Id]);

    return <div className="form-container">
        <div className="form">
        <form onSubmit={handleSubmit((data) => handleAddAndUpdate(data))}>
          <div className="input-section">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Beneficiary Name"
              className={cn("", {
                "border-red": errors.fullName,
              })}
              {...register("fullName", {
                required: "Name is required",
              })}
            />
            {errors.fullName && (
              <p className="err-msg">{errors?.fullName?.message}</p>
            )}
          </div>
          <div className="input-section">
            <label htmlFor="address">Address *</label>
            <input type="address" 
            id="address" 
             placeholder="Enter Beneficiary Address"
             className={cn("", {
                "border-red": errors.address,
              })}
               {...register("address", {
                required: "Address is required",
              })} />
              {errors.address && (
              <p className="err-msg">{errors?.address?.message}</p>
            )}
          </div>
          <div className="input-section">
            <label htmlFor="country">Country *</label>
            <Select
              name="country"
              onChange={(item) => handleSelectCountry(item ?? null, "country")}
              defaultValue={defaultCountry}
              options={modifyCountryList}
              className={cn("", {
                "border-red": errors.country,
              })}
              value={country || defaultCountry}
              classNamePrefix={"profile_section_country"}
              styles={selectStyles}
            />
            {errors.country && (
              <p className="err-msg">{errors?.country?.message}</p>
            )}
          </div>
          <div className="input-section">
            <label htmlFor="pincode">Pincode *</label>
            <input
              type="number"
              placeholder="Enter Beneficiary Pincode"
              className={cn("", {
                "border-red": errors.pinCode,
              })}
              {...register("pinCode", {
                required: "Pincode is required",
                 validate: validateInput 
              })}
            />
            {errors.pinCode && (
              <p className="err-msg">{errors?.pinCode?.message}</p>
            )}
          </div>
          <button
            type="submit"
            hidden
            style={{ display: "none" }}
             ref={submitBtnRef}
          ></button>
        </form>
        </div>
        <div className="footer">
        <button
          className="profile-options-update-btn"
          disabled={!([selectChange,isDirty,Object.keys(errors).lenght].some(Boolean))}
       
          onClick={() => {
            submitBtnRef?.current?.click();
            setCountry(null);
          }}
          style={{
            background:
            ([selectChange,isDirty,Object.keys(errors).lenght].some(Boolean))
                ? "#536CE1"
                : "#E2E8F0",
            color:
            ([selectChange,isDirty,Object.keys(errors).lenght].some(Boolean))
                ? "#fff"
                : "#94A3B8",
          }}
        >
          {Id ? "Update" : "Add"}
        </button>
      </div>
    </div>
}

export default Form;