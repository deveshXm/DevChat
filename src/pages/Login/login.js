import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Login/Form";

const Login = () => {  
  return (
    <React.Fragment>
      <Header/>      
      <Form/>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
