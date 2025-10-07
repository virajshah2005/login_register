import React, { useEffect, useState } from "react";
import { IUserModel, getActiveUser, removeActiveUser } from "../LocalStorage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #F5F0F3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  width: 320px;
`;

const Heading = styled.h2`
  font-family: 'Playfair Display', serif;
  color: #6B4C7D;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #333333;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  background-color: #5BCFBE;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

const Home: React.FC = () => {
  const [activeUser, setActiveUser] = useState<IUserModel>();
  const navigate = useNavigate();

  useEffect(() => {
    const user = getActiveUser();
    if (user) setActiveUser(user);
    else navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    removeActiveUser();
    navigate("/login");
  };

  return (
    <Container>
      <Card>
        <Heading>Welcome!</Heading>
        <Text>Hello, <strong>{activeUser?.name || "User"}</strong> 👋</Text>
        <Button onClick={handleLogout}>Logout</Button>
      </Card>
    </Container>
  );
};

export default Home;
