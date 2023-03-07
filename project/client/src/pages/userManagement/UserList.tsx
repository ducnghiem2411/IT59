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
  const [paging, setPaging] = useState({ page: 0, pageSize: 100 })
  const [userList, setUserList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getAccountList(paging.page, paging.pageSize)
      console.log(response);
      if (response) {
        const totalPage = Math.ceil((response.total)/paging.pageSize)
        setUserList(response.data)
      }
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

      <CustomTable columnShape={UserListColumnShape} data={userList} totalPages={paging.pageSize} />
    </Box>
  )
}

export default UserList