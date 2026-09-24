import './Form.css';

export default function Form() {
    const data = {
        email: '',
        password: '',
        isLoggedIn: false
    };
    function changeData (event) {
        event.preventDefault();
        data.email='user@example.com';
        data.password='password123';
        data.isLoggedIn = true;
        console.log(data);
    }
    return (
        <div className="form-container">
            <form className="form">
                <h2>Login</h2>
                <input type="email" placeholder="Enter your email" />
                
                <input type="password" placeholder="Enter your password" />

                <button className="tabs" onClick={changeData}>Login</button>
            </form>
        </div>
    );
}
