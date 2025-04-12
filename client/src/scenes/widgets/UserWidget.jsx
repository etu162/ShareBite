import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
  } from "@mui/icons-material";
  import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
  import { Box, Typography, Divider, useTheme } from "@mui/material";
  import UserImage from "components/UserImage";
  import FlexBetween from "components/FlexBetween";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useSelector } from "react-redux";
  import { useEffect, useState } from "react";//useState → to store component data (e.g., user info, loading state)
//useEffect → to run code when the component loads or updates
  import { useNavigate } from "react-router-dom";
  
  const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);//Here, user is a state variable that holds the current value of the user data.​
//setUser is the function used to update the user state.​
    //The initial value of user is set to null, indicating that initially, there is no user data available.
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);//useSelector is a hook provided by React-Redux that allows you to extract data from the Redux store's state.The function (state) => state.token is a selector function that specifies which part of the state you want to retrieve; in this case, the token.
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
  
    const getUser = async () => {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {//fetch Function: Initiates an HTTP request to the specified URL. In this case, it's making a GET request to http://localhost:3001/users/${userId} to retrieve user data. ​
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data);
    };
  
    useEffect(() => {
      getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    if (!user) {
      return null;
    }
  
    const {
      firstName,
      lastName,
      location,
      phone,
      viewedProfile,
      impressions,
      friends,
    } = user;
  
    return (
      <WidgetWrapper>
        {/* FIRST ROW */}
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
          onClick={() => navigate(`/profile/${userId}`)}
        >
          <FlexBetween gap="1rem">
            <UserImage image={picturePath} />
            <Box>
              <Typography
                variant="h4"
                color={dark}
                fontWeight="500"
                sx={{
                  "&:hover": {
                    color: palette.primary.light,
                    cursor: "pointer",
                  },
                }}
              >
                {firstName} {lastName}
              </Typography>
              <Typography color={medium}>{friends.length} friends</Typography>
            </Box>
          </FlexBetween>
         {/* <ManageAccountsOutlined /> */}
        </FlexBetween>
  
        <Divider />
  
        {/* SECOND ROW */}
        <Box p="1rem 0">
          <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
            <LocationOnOutlined fontSize="large" sx={{ color: main }} />
            <Typography color={medium}>{location}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="1rem">
          <PhoneOutlined fontSize="large" sx={{ color: main }} />
            <Typography color={medium}>{phone}</Typography>
          </Box>
        </Box>
  
        <Divider />
  
        {/* THIRD ROW */}
        {/* <Box p="1rem 0">
          <FlexBetween mb="0.5rem">
            <Typography color={medium}>Who's viewed your profile</Typography>
            <Typography color={main} fontWeight="500">
              {viewedProfile}
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography color={medium}>Impressions of your post</Typography>
            <Typography color={main} fontWeight="500">
              {impressions}
            </Typography>
          </FlexBetween>
        </Box> */}
  
        <Divider />
  
        {/* FOURTH ROW */}
        <Box p="1rem 0">
          <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
            Social Profiles
          </Typography>
  
          <FlexBetween gap="1rem" mb="0.5rem">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>

            <FlexBetween gap="1rem">
              <img src="../assets/facebook.png" alt="facebook" />
              <Box>
                <Typography color={main} fontWeight="500">
                  facebook
                </Typography>
                <Typography color={medium}>Social Network</Typography>
              </Box>
            </FlexBetween>
            </a>

            {/* <EditOutlined sx={{ color: main }} /> */}
          </FlexBetween>
  
          <FlexBetween gap="1rem">
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <FlexBetween gap="1rem">
      <img src="../assets/linkedin.png" alt="linkedin" />
      <Box>
        <Typography color={main} fontWeight="500">
          Linkedin
        </Typography>
        <Typography color={medium}>Network Platform</Typography>
      </Box>
    </FlexBetween>
  </a>
  {/* <EditOutlined sx={{ color: main }} /> */}
</FlexBetween>
        </Box>
      </WidgetWrapper>
    );
  };
  
  export default UserWidget;