import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IUserModel, addUser, isUsernameExists } from "../LocalStorage";

const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-color: #F5F0F3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    min-height: calc(100vh - 70px);
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Card = styled.div`
  background: white;
  padding: 48px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;

  @media (max-width: 768px) {
    padding: 40px 32px;
  }

  @media (max-width: 480px) {
    padding: 32px 24px;
  }
`;

const Heading = styled.h2`
  font-family: "Playfair Display", serif;
  color: #6B4C7D;
  margin: 0 0 32px 0;
  text-align: center;
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #6B4C7D;
  font-size: 14px;
  font-weight: 600;
  margin-left: 2px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #E0D5E8;
  border-radius: 8px;
  font-size: 16px;
  color: #333333;
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-family: "Open Sans", sans-serif;

  &:focus {
    outline: none;
    border-color: #6B4C7D;
    box-shadow: 0 0 0 3px rgba(107, 76, 125, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 15px;
  }
`;

const Button = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #6f4465 0%, #8b738b 100%);
  color: white;
  border: none;
  padding: 14px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  margin-top: 8px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(111, 68, 101, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 15px;
  }
`;

const Message = styled.p<{ success?: boolean }>`
  color: ${({ success }) => (success ? "#28a745" : "#dc3545")};
  background: ${({ success }) => (success ? "#d4edda" : "#fee")};
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  margin: 0;
  border-left: 4px solid ${({ success }) => (success ? "#28a745" : "#dc3545")};

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 13px;
  }
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin: 24px 0 0 0;

  a {
    color: #6B4C7D;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #8b738b;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-top: 16px;
  }
`;

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
        <Form onSubmit={handleFormSubmit}>
          {message && (
            <Message success={message.includes("successfully")}>{message}</Message>
          )}
          
          <InputWrapper>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              placeholder="Enter your full name"
              id="name"
              value={data.name}
              onChange={handleInputChange}
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="username">Email</Label>
            <Input
              type="text"
              placeholder="Enter your email"
              id="username"
              value={data.username}
              onChange={handleInputChange}
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              id="password"
              value={data.password}
              onChange={handleInputChange}
            />
          </InputWrapper>

          <Button type="submit">Register</Button>
        </Form>

        <FooterText>
          Already have an account? <Link to="/login">Login</Link>
        </FooterText>
      </Card>
    </Container>
  );
};

export default Register;