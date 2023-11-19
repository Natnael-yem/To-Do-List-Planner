type activated = {
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    active: boolean;
}
const Contact = ({setActive, active} : activated) => {
    const handleActive = () => {
        setActive(!active);
      };
    return(
    <div className="font-serif flex flex-col sm:m-24 m-5 ">
          <p className="w-auto text-center">
            Welcome to <span className="font-bold ">The To Do Planner</span> we are
            excited and thrilled that you are here.
          </p>
          <button
            className="text-gray-500 text-2xl font-medium"
            onClick={handleActive}
          >
            + Add Task
          </button>
        </div>
    )
}
export default Contact