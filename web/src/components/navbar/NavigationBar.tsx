import { useDisclosure } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation, useMeQuery } from "../../graphql/generated/graphql";
import FriendSidebar from "./FriendSidebar";

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #fafafa;
  border-bottom: 1px solid #eaeaea;
`;

const BarTitle = styled.button`
  order: 1;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: 0.3s;
  &:hover {
    background-color: lightgray;
  }
`;

const BarButtons = styled.div`
  display: flex;
  justify-content: space-around;
  order: 2;
  border-color: black;
`;

const BarButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: #333;
  margin: 0 1rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  &:hover {
    background-color: lightgray;
  }
`;

interface NavigationBarProps {}

function NavigationBar() {
  const navigate = useNavigate();
  const {
    isOpen: friendsOpen,
    onOpen: onFriendsOpen,
    onClose: onFriendsClose,
  } = useDisclosure();

  const { data: { me } = {}, error } = useMeQuery();
  const [logout] = useLogoutMutation({ refetchQueries: "active" });

  if (!me && !error) {
    return <></>;
  }

  if (error || !me) {
    return (
      <Bar>
        <BarTitle onClick={() => navigate("/home")}>WeFit</BarTitle>
        <BarButtons>
          <BarButton onClick={() => navigate("/register")}>Sign up</BarButton>
          <BarButton onClick={() => navigate("/login")}>Log In</BarButton>
        </BarButtons>
      </Bar>
    );
  }

  return (
    <>
      <FriendSidebar isOpen={friendsOpen} onClose={onFriendsClose} />
      <Bar>
        <BarTitle onClick={() => navigate("/home")}>WeFit</BarTitle>
        <BarButtons>
          <BarButton onClick={() => navigate("/workouts")}>Workouts</BarButton>
          <BarButton onClick={() => navigate("/")}>Feed</BarButton>
          <BarButton
            onClick={() => {
              onFriendsOpen();
            }}
          >
            Friends
          </BarButton>
          <BarButton onClick={() => navigate(`/profile/${me.id}`)}>
            Profile
          </BarButton>
          <BarButton
            onClick={async () => {
              const res = await logout();
              navigate("/home");
            }}
          >
            Logout
          </BarButton>
        </BarButtons>
      </Bar>
    </>
  );
}

export default NavigationBar;
