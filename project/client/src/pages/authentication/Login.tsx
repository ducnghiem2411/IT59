import { LoadingButton } from '@mui/lab'
import {
  Box,
  Button,
  Card,
  Divider,
  FormControlLabel,
  FormHelperText,
  Switch
} from '@mui/material'
import { TextFieldWrapper } from 'components/authentication/StyledComponents'
import FlexBox from 'components/FlexBox'
import LightTextField from 'components/LightTextField'
import { H1, Paragraph, Small } from 'components/Typography'
import { setSession } from 'api/index'
import { useFormik } from 'formik'
import useAuth from 'hooks/useAuth'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { signIn } from '../../api/users'

const Login: FC = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { userAuthInfo, setUserAuthInfo } = useAuth()
  let navigate = useNavigate()

  const initialValues = {
    username: 'admin02',
    password: '123123',
    submit: null,
    remember: true
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .max(255)
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password should be of minimum 6 characters length')
      .required('Password is required')
  })

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values: any) => {
        try {
          setLoading(true)
          const response = await signIn(values.username, values.password)
          setSession(response.token)
          setLoading(false)
          toast.success('Đăng nhập thành công')
          navigate('/')
        } catch (error) {
          setError('Sai tên đăng nhập hoặc mật khẩu')
          setLoading(false)
        }
      }
    })

  return (
    <FlexBox
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: { sm: '100%' }
      }}
    >
      <Card sx={{ padding: 4, maxWidth: 600, boxShadow: 20 }}>
        <FlexBox
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
          mb={5}
        >
          <Box width={38} mb={1}>
            <img src='/static/logo/logo.svg' width='100%'/>
          </Box>
          <H1 fontSize={24} fontWeight={700}>
            Đăng nhập hệ thống
          </H1>
        </FlexBox>

        <FlexBox justifyContent='space-between' flexWrap='wrap' my='1rem'>
          <Divider
            sx={{ my: 3, width: '100%', alignItems: 'flex-start' }}
          ></Divider>

          <form noValidate onSubmit={handleSubmit} style={{ width: '100%' }}>
            <FlexBox justifyContent='space-between' flexWrap='wrap'>
              <TextFieldWrapper>
                <Paragraph fontWeight={600} mb={1}>
                  Tên tài khoản
                </Paragraph>
                <LightTextField
                  fullWidth
                  name='email'
                  type='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username || ''}
                  error={Boolean(touched.username && errors.username)}
                  helperText={touched.username && errors.username}
                />
              </TextFieldWrapper>

              <TextFieldWrapper>
                <Paragraph fontWeight={600} mb={1}>
                  Mật khẩu
                </Paragraph>
                <LightTextField
                  fullWidth
                  name='password'
                  type='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password || ''}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </TextFieldWrapper>
            </FlexBox>

            <FlexBox mt={2} alignItems='center' justifyContent='space-between'>
              <FormControlLabel
                control={
                  <Switch
                    name='remember'
                    checked={values.remember}
                    onChange={handleChange}
                  />
                }
                label='Lưu đăng nhập'
                sx={{ '& .MuiTypography-root': { fontWeight: 600 } }}
              />
              <Link to='/forget-password'>
                <Small color='secondary.red'>Quên mật khẩu?</Small>
              </Link>
            </FlexBox>

            {error && (
              <FormHelperText
                error
                sx={{
                  mt: 2,
                  fontSize: 13,
                  fontWeight: 500,
                  textAlign: 'center'
                }}
              >
                {error}
              </FormHelperText>
            )}

            <Box sx={{ mt: 4 }}>
              {loading ? (
                <LoadingButton loading fullWidth variant='contained'>
                  Đăng nhập
                </LoadingButton>
              ) : (
                <Button fullWidth type='submit' variant='contained'>
                  Đăng nhập
                </Button>
              )}
            </Box>
          </form>
        </FlexBox>
      </Card>
    </FlexBox>
  )
}

export default Login
