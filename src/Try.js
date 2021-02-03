import './App.css';

function Try(){
    return(
        <div className="Login">
            <h1>Sign in:</h1>
            <input className="input" type="text" placeholder="username"></input> <br />
            <input className="input" type="password" placeholder="password"></input> <br />
            <p>Not yet registered? <a href="#">Register here</a></p>
            <input type="submit" value="Login"></input>
        </div>
    );
}


export default Try;