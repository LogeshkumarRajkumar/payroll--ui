import React,{Component} from 'react';
import './../assets/css/registration.css';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';


class App extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props){
        super(props);
        const { cookies } = props;
        this.state={
            token: cookies.get('token') || ''
        };  
    }

    dropcookie(token){
        const { cookies } = this.props;
        cookies.set('token_py', token, { path: '/' });
        this.setState({ token:token });
    }
    login(){
        let request={
            email: this.state.username,
            password: this.state.password
        }
        console.log(this.state);
        fetch('http://payroll-service.herokuapp.com/token', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
          }).then(response=>response.json()).then((response)=>{
            if(response.token){
                this.dropcookie(response.token)
            }else{
                console.log(response);
            }
        });
    }

    render(){
        return (
            <div className="container">
            <header>
                <h1 style={{background:'#00000045',padding:15}}>Payroll Managment</h1>				
            </header>
            <section>				
                <div id="container_demo" >
                    <a className="hiddenanchor" href="" id="toregister">Register</a>
                    <a className="hiddenanchor" href="" id="tologin">Login</a>
                    <div id="wrapper">
                        <div id="login" className="animate form">
                            <form  action="mysuperscript.php" autoComplete="on"> 
                                <h1>Log in</h1> 
                                <p> 
                                    <label htmlFor="username" className="uname" > Your email or username </label>
                                    <input onChange={(event)=>this.setState({username:event.target.value})} id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/>
                                </p>
                                <p> 
                                    <label htmlFor="password" className="youpasswd"> Your password </label>
                                    <input onChange={(event)=>this.setState({password:event.target.value})} id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> 
                                </p>
                                <p className="keeplogin"> 
									<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
									<label htmlFor="loginkeeping">Keep me logged in</label>
								</p>
                                <p className="login button"> 
                                    <input type="button" value="Login" onClick={(event)=>{event.preventDefault();this.login()}}/> 
								</p>
                                <p className="change_link">
									Not a member yet ?
									<a href="#toregister" className="to_register">Join us</a>
								</p>
                            </form>
                        </div>

                        <div id="register" className="animate form">
                            <form  action="mysuperscript.php" autoComplete="on"> 
                                <h1> Sign up </h1> 
                                <p> 
                                    <label htmlFor="usernamesignup" className="uname" >Your username</label>
                                    <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
                                </p>
                                <p> 
                                    <label htmlFor="emailsignup" className="youmail"  > Your email</label>
                                    <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com"/> 
                                </p>
                                <p> 
                                    <label htmlFor="passwordsignup" className="youpasswd" >Your password </label>
                                    <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                </p>
                                <p> 
                                    <label htmlFor="passwordsignup_confirm" className="youpasswd" >Please confirm your password </label>
                                    <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                </p>
                                <p className="signin button"> 
									<input type="submit" value="Sign up"/> 
								</p>
                                <p className="change_link">  
									Already a member ?
									<a href="#tologin" className="to_register"> Go and log in </a>
								</p>
                            </form>
                        </div>
						
                    </div>
                </div>  
            </section>
        </div>
        )
    }
}

export default withCookies(App);