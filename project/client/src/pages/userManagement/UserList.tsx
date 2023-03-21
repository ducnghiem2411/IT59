import { Box, Button, styled } from '@mui/material'
import { getAccountList } from 'api/users'
import FlexBox from 'components/FlexBox'
import SearchInput from 'components/SearchInput'
import UserListColumnShape from 'components/userManagement/columnShape'
import CustomTable from 'components/userManagement/CustomTable'
import useAuth from 'hooks/useAuth'
import { FC, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

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
  let [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 0
  const pageSize = 5

  // change navbar title
  const navigate = useNavigate()
  const handleAddUser = () => navigate('/dashboard/add-account')

  const handlePaging = (page:number) => navigate(`/account?${page}&${pageSize}`)
  const [paging, setPaging] = useState({ page, pageSize })
  const { userAuthInfo } = useAuth()
  const [userList, setUserList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getAccountList(paging.page, paging.pageSize)
      if (response) {
        setUserList(response.data)
      }
    }
    fetchData()
  }, [])

  return (
    <Box pt={2} pb={4}>
      <StyledFlexBox>
        <SearchInput placeholder="Search user..." />
        { 
          userAuthInfo?.accountType === 'admin' && 
            <Button variant="contained" onClick={handleAddUser}>
              Add New User
            </Button>
        }
      </StyledFlexBox>

      <CustomTable columnShape={UserListColumnShape} data={userList} totalPages={paging.pageSize} />
    </Box>
  )
}

export default UserList