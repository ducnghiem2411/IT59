import { AppBar, Box, styled, Theme, Toolbar, useMediaQuery, Button } from '@mui/material'
import { H2 } from 'components/Typography'
import useAuth from 'hooks/useAuth'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import NotificationsPopover from './popovers/NotificationsPopover'
import ProfilePopover from './popovers/ProfilePopover'

// root component interface
interface DashboardNavBarProps {
  setShowMobileSideBar: () => void
  title: string
}

// custom styled components
const DashboardNavbarRoot = styled(AppBar)(() => ({
  zIndex: 11,
  boxShadow: 'none',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  backdropFilter: 'blur(6px)',
  backgroundColor: 'transparent',
}))

const StyledToolBar = styled(Toolbar)(() => ({
  '@media (min-width: 0px)': {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'auto',
  },
}))

const ToggleIcon = styled(Box)(({ theme }) => ({
  width: 25,
  height: 3,
  margin: '5px',
  borderRadius: '10px',
  transition: 'width 0.3s',
  backgroundColor: theme.palette.primary.main,
}))

// root component
const DashboardNavbar: FC<DashboardNavBarProps> = ({ title }) => {
  const { userAuthInfo } = useAuth()
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }
  return (
    <DashboardNavbarRoot position="sticky">
      <StyledToolBar>
        <Box>
          <ToggleIcon />
          <ToggleIcon />
          <ToggleIcon />
        </Box>

        <H2 fontSize={21} lineHeight={0} mx={1} fontWeight="700" color="text.primary">
          {title}
        </H2>

        <Box flexGrow={1} ml={1} />
        {userAuthInfo ? (
          <>
            <NotificationsPopover />
            <ProfilePopover />
          </>
        ) : (
          <Button variant="contained" onClick={handleLogin}>
            Sign in
          </Button>
        )}
      </StyledToolBar>
    </DashboardNavbarRoot>
  )
}

export default DashboardNavbar
