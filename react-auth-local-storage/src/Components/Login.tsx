// src/pages/Login.tsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUser, updateActiveUser } from "../LocalStorage";

// ✅ Styled Components for consistent look
const Container = styled.div`
  min-height: 100vh;
  background-color: #F5F0F3;
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
  width: 320px;
`;

const Heading = styled.h2`
  font-family: "Playfair Display", serif;
  color: #6B4C7D;
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
  background-color: #5BCFBE;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #333333;
`;

interface ILoginModel {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [data, setData] = useState<ILoginModel>({ username: "", password: "" });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
    setError("");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.username.trim() === "" || data.password.trim() === "") {
      setError("Please fill all fields");
      return;
    }

    const user = getUser(data.username, data.password);
    if (!user) {
      setError("Invalid username or password");
      return;
    }

    updateActiveUser(user);
    navigate("/");
  };

  return (
    <Container>
      <Card>
        <Heading>Login</Heading>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            id="username"
            placeholder="Username or Email"
            value={data.username}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            value={data.password}
            onChange={handleInputChange}
          />
          <Button type="submit">Login</Button>
        </form>
        <FooterText>
          Don’t have an account? <Link to="/register">Sign up</Link>
        </FooterText>
      </Card>
    </Container>
  );
};

export default Login;
