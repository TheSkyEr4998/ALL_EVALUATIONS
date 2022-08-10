import React from "react";
const Profile = () => {

    const [age, setAge] = React.useState(18);
    const [show, setShow] = React.useState(true);

    function changeAge(value){
        setAge(value);
    }

    return(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVw8kQmyeJzUPlmduUzRqlFsKKlYA-eAgCzZtz1V7_v6abNwQKsWWE84zEs_A1lPcBmw&usqp=CAU" />
            <h1>Name: Venkatesh</h1>
            <h1>Age: {age}</h1>
            <button onClick={()=>changeAge(age+1)}>INCREASE AGE</button>
            <button onClick={()=>changeAge(age-1)}>DECREASE AGE</button><br></br>
            <button onClick={()=>setShow(!show)}>{
                show?("HIDE DETAILS"):("SHOW DETAILS")
            }</button>
            {
                show? (
                    <div>
                        <h1>Location: Bengaluru <br></br> Organisation: Masai School</h1>
                    </div>):null
            }
        </div>
    )
}

export default Profile;