export default function HomePage({updateLogInStatus, updateUserInfo}) {
    //const status = "HomePage";

    function handleClick(event) {
        event.preventDefault();
        updateLogInStatus("ShopPage");
        updateUserInfo(userName);
    }

    function handleChange(event) {
        userName = event.target.value;
        console.log(userName)
    }
    

    return (
        <>
            <form>
                <input type="text" placeholder="Name" onChange={handleChange}></input>
                <button onClick={handleClick}>Log In</button>
            </form>
        </>
    )
}