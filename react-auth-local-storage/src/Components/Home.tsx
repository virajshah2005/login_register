import React, { useEffect, useState } from "react";
import { IUserModel, getActiveUser, removeActiveUser } from "../LocalStorage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-color: #F5F0F3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  font-family: 'Open Sans', sans-serif;

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
  padding: 64px 48px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 48px 40px;
  }

  @media (max-width: 480px) {
    padding: 40px 32px;
  }
`;

const Heading = styled.h2`
  font-family: 'Playfair Display', serif;
  color: #6B4C7D;
  margin: 0 0 24px 0;
  font-size: 42px;
  font-weight: 600;
  background: linear-gradient(135deg, #6f4465 0%, #8b738b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #555;
  margin: 0 0 32px 0;
  line-height: 1.6;

  strong {
    color: #6B4C7D;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 28px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 24px;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #6f4465 0%, #8b738b 100%);
  color: white;
  border: none;
  padding: 14px 48px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(111, 68, 101, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 14px 40px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 32px;
    font-size: 15px;
  }
`;

const UserInfo = styled.div`
  background: rgba(111, 68, 101, 0.05);
  padding: 16px 24px;
  border-radius: 8px;
  margin-bottom: 32px;
  border-left: 4px solid #6B4C7D;

  @media (max-width: 768px) {
    padding: 14px 20px;
    margin-bottom: 28px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    margin-bottom: 24px;
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
        <Heading>Welcome! 🎉</Heading>
        <UserInfo>
          <Text>
            Hello, <strong>{activeUser?.name || "User"}</strong> 👋
          </Text>
        </UserInfo>
        <Text>
          You have successfully logged in to your dashboard. Enjoy your experience!
        </Text>
        <Button onClick={handleLogout}>Logout</Button>
      </Card>
    </Container>
  );
};

export default Home;