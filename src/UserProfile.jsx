function userProfile(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <img style={{padding: "10px"}} src={props.imgUrl}></img>
        </div>
    );
}

export default userProfile;