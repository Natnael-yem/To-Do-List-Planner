import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
type content ={
    show:boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const Showbutton = ({show, setShow}: content)=>{
    const handleShowless = () => {
        setShow(!show);
      };
      const handleShowmore = () => {
        setShow(!show);
      };
    return(
        <>
        {show ? (
            <button onClick={handleShowless}>
              <BiChevronDown />
            </button>
          ) : (
            <button onClick={handleShowmore}>
              <BiChevronUp />
            </button>
          )}
          </>
    )
}
export default Showbutton