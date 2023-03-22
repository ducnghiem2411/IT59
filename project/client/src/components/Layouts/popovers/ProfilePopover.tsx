import { Badge, Box, ButtonBase, Divider, styled } from "@mui/material";
import FlexBox from "components/FlexBox";
import { H6, Small, Tiny } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import useAuth from "hooks/useAuth";
import { FC, Fragment, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PopoverLayout from "./PopoverLayout";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


// styled components
const StyledSmall = styled(Small)(({ theme }) => ({
  display: "block",
  padding: "5px 1rem",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.secondary.light
        : theme.palette.divider,
  },
}));

const ProfilePopover: FC = () => {
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const { userAuthInfo, setUserAuthInfo } = useAuth();
  const [open, setOpen] = useState(false);

  const handleMenuItem = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const handleLogout = () => {
    //@ts-ignore
    setUserAuthInfo(null);
    toast.error("You Logout Successfully");
  }

  return (
    <Fragment>
      <ButtonBase disableRipple ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          sx={{
            "& .MuiBadge-badge": {
              width: 11,
              height: 11,
              right: "7%",
              borderRadius: "50%",
              border: "2px solid #fff",
              backgroundColor: "success.main",
            },
          }}
        >
          <UkoAvatar
            src={userAuthInfo?.image || `${AccountCircleIcon}`}
            sx={{ width: 50, height: 50, ml: 1 }}
          />
        </Badge>
      </ButtonBase>

      <PopoverLayout
        hiddenViewButton
        maxWidth={230}
        minWidth={200}
        popoverOpen={open}
        anchorRef={anchorRef}
        popoverClose={() => setOpen(false)}
        title={
          <FlexBox alignItems="center">
            <UkoAvatar
              src={ userAuthInfo?.image || `${AccountCircleIcon}` }
              sx={{ width: 50, height: 50 }}
            />

            <Box ml={1}>
              <H6>{userAuthInfo?.fullName}</H6>
              <Tiny display="block" fontWeight={500} color="text.disabled">
                {userAuthInfo?.email}
              </Tiny>
            </Box>
          </FlexBox>
        }
      >
        <Box pt={1}>
          <StyledSmall onClick={() => handleMenuItem(`/account/${userAuthInfo?.accountId}`)}>
            Profile page
          </StyledSmall>

          <StyledSmall onClick={() => handleMenuItem("/account/settings")}>
            Settings
          </StyledSmall>

          <Divider sx={{ my: 1 }} />

          <StyledSmall onClick={handleLogout}>
            Sign Out
          </StyledSmall>
        </Box>
      </PopoverLayout>
    </Fragment>
  );
};

export default ProfilePopover;
