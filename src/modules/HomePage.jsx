export default function HomePage({ updateLogInStatus, updateUserInfo }) {
    //const status = "HomePage";

    const [name, setName] = useState("anonymous");

    function handleClick(event) {
        event.preventDefault();
        updateLogInStatus("ShopPage");
        updateUserInfo(name);
    }

    function handleChange(event) {
        setName (event.target.value);
        console.log(setName);
    }


    return (
        <>

        <h3 id="loginentername">WELCOME</h3>
        <h2></h2>
            <form >
                <div class="row">
                    <div class="col"></div>
                    <div class="col">
                        <input id="logininput" type="text" placeholder="Name" onChange={handleChange}></input>
                    </div>
                    <div class="col">
                        <button id="loginbutton" onClick={handleClick}>Log In</button>
                    </div>
                    <div class="col"></div>
                </div>
            </form>
        </>
    )
}