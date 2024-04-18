import { v4 as uuidv4 } from 'uuid';

export const generateId = () => {
    return uuidv4();
  };

export const selectStyles = {
    valueContainer: (base) => ({
        ...base,
        display: "flex",
        justifyContent: "left",
        paddingLeft:"1rem"
      }),
      input: (base) => ({
        ...base,
        height: "50px",
        borderRadius: "5px",
      }),
    container: (base) => ({
      ...base,
      width: "100%",
    }),
    control: (base) => ({
      ...base,
      cursor: "pointer",
      fontSize: "1.3rem",
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: "1.3rem",
    }),
    option: (base) => ({
      ...base,
      cursor: "pointer",
      fontSize: "1.3rem",
      overflow: "hidden",
      display:"flex",
      justifyContent: "left",
    }),
  };
