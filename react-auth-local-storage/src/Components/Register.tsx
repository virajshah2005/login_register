import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IUserModel, addUser, isUsernameExists } from "../LocalStorage";

/* --- Styled Components --- */

const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f0f3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 340px;
`;

const Heading = styled.h2`
  font-family: "Playfair Display", serif;
  color: #6b4c7d;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  color: #333333;
`;

const Button = styled.button`
  width: 100%;
  background-color: #5bcfbe;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

const Message = styled.p<{ success?: boolean }>`
  color: ${({ success }) => (success ? "green" : "red")};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #333333;
  margin-top: 1rem;

  a {
    color: #6b4c7d;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }
`;

/* --- Component --- */

const Register: React.FC = () => {
  const [data, setData] = useState<IUserModel>({
    name: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
    setMessage("");
  };

  const resetData = () => {
    setData({
      name: "",
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.name === "" || data.username === "" || data.password === "") {
      setMessage("Please fill all the fields");
      return;
    }

    if (isUsernameExists(data.username)) {
      setMessage("Can't register. User already exists");
      return;
    }

    addUser(data);
    resetData();
    setMessage("User registered successfully! Go to Login page.");
  };

  return (
    <Container>
      <Card>
        <Heading>Sign Up</Heading>
        {message && (
          <Message success={message.includes("successfully")}>{message}</Message>
        )}
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="Name"
            id="name"
            value={data.name}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Email"
            id="username"
            value={data.username}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder="Password"
            id="password"
            value={data.password}
            onChange={handleInputChange}
          />
          <Button type="submit">Register</Button>
        </form>

        <FooterText>
          Already have an account? <Link to="/login">Login</Link>
        </FooterText>
      </Card>
    </Container>
  );
};

export default Register;
