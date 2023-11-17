import ContextCreate from "./ContextCreate";



const WrapContext = (props) => {
    const data = {
        name: "John",
        age: 25,
        address: "USA"
    }
    return (
        <ContextCreate.Provider value={data}>
            {props.children}
        </ContextCreate.Provider>
    )
}


export default WrapContext;
