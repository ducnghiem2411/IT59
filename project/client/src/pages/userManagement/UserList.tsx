import { Box, Button, styled } from '@mui/material'
import { getAccountList } from 'api/users'
import FlexBox from 'components/FlexBox'
import SearchInput from 'components/SearchInput'
import UserListColumnShape from 'components/userManagement/columnShape'
import CustomTable from 'components/userManagement/CustomTable'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// styled component
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: 20,
  [theme.breakpoints.down(500)]: {
    width: '100%',
    '& .MuiInputBase-root': { maxWidth: '100%' },
    '& .MuiButton-root': {
      width: '100%',
      marginTop: 15,
    },
  },
}))

const UserList: FC = () => {
  // change navbar title
  const navigate = useNavigate()
  const handleAddUser = () => navigate('/dashboard/add-user')
  const [userList, setUserList] = useState()

  useEffect(() => {
    async function fetchData() {
      const response = await getAccountList(0, 5)
      console.log(response);
    }
    fetchData()
  }, [])

  return (
    <Box pt={2} pb={4}>
      <StyledFlexBox>
        <SearchInput placeholder="Search user..." />
        <Button variant="contained" onClick={handleAddUser}>
          Add New User
        </Button>
      </StyledFlexBox>

      <CustomTable columnShape={UserListColumnShape} data={userListFakeData} />
    </Box>
  )
}

export default UserList

const userListFakeData = [
  {
    id: '615193a4c7e1363df77b9929',
    name: 'Natalie Dormer',
    role: 'UI Designer',
    company: 'Tesla',
    avatar: '/static/avatar/001-man.svg',
    verified: 'Yes',
    address: 'Arizona, USA',
    project: 'Project X',
  },
  {
    id: '615193bab7b256189c6fe997',
    name: 'Drake',
    role: 'Project Manager',
    company: 'Ford',
    avatar: '/static/avatar/003-boy.svg',
    verified: 'Yes',
    address: 'Arizona, USA',
    project: 'Project X',
  },
  {
    id: '615193d64696d4665abb8ea5',
    name: 'Gryffin',
    role: 'Developer',
    company: 'Tesla',
    avatar: '/static/avatar/011-man-2.svg',
    verified: 'Yes',
    address: 'Arizona, USA',
    project: 'Project X',
  },
]
