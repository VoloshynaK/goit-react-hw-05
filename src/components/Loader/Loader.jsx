import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = ({loading}) => {
    return (
       <div>
            <PropagateLoader
                color="#36d7b7"
                cssOverride={null}
                loading={loading}
                size={15}
                speedMultiplier={0.7}
            />
       </div>
    )
}

export default Loader;