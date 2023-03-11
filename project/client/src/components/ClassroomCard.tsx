import { Box, Card, Divider, Grid, IconButton, styled } from '@mui/material'
import { H3, H6, Small, Tiny } from 'components/Typography'
import UkoAvatar from 'components/UkoAvatar'
import React, { FC } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// component props interface
interface UserCardProps {
  classroom: {
    cover: string
    classroomId: string
    classroomName: string
    teacherCount: number
    teachersId: string[]
    studentCount: number
    studentsId: string[]
    createdAt: number
  }
}

// styled components
const ImageWrapper = styled(Box)(({ theme }) => ({
  height: 100,
  position: 'relative',
  '&::before': {
    content: '""',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
    opacity: 0.6,
    backgroundColor: theme.palette.primary[100]
  }
}))

const StyledAvatar = styled(UkoAvatar)(({ theme }) => ({
  zIndex: 1,
  width: 50,
  height: 50,
  bottom: -25,
  position: 'absolute',
  left: '50%',
  right: '50%',
  transform: 'translateX(-50%)',
  border: '2px solid',
  borderColor: theme.palette.background.paper
}))

const ClassroomCard: FC<UserCardProps> = ({ classroom }) => {
  
  return (
    <Card>
      <ImageWrapper>
        <img
          src={'/static/cover/cover-3.png'}
          width='100%'
          height='100%'
          alt={classroom.classroomName}
        />

        <StyledAvatar src={'/static/classroom/school.png'} alt={classroom.classroomName} />
      </ImageWrapper>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 5
        }}
      >
        <H6>{classroom.classroomName}</H6>
        <Tiny color='text.disabled' fontWeight={500}>
          Information Technology
        </Tiny>

      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={3} mb={2}>
        <Grid item xs={4} textAlign='center'>
          <H3>{classroom.teacherCount}</H3>
          <Small color='text.disabled'>Teachers</Small>
        </Grid>
        <Grid item xs={4} textAlign='center'>
          <H3>{classroom.studentCount}</H3>
          <Small color='text.disabled'>Students</Small>
        </Grid>
        <Grid item xs={4} textAlign='center'>
          <H3>{`${new Date(classroom.createdAt).toISOString().slice(0, 7)}`}</H3>
          <Small color='text.disabled'>Ngày tạo</Small>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ClassroomCard
