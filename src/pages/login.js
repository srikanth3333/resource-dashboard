import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123'
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required')
    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            sx={{alignItems: 'center',}}
          >
            <Grid
                item
                xl={6}
                lg={6}
                sm={6}
                xs={12}
                sx={{ display: {sm: 'none' }}}
              >
                <img src="/static/images/avatars/2853458.jpg" style={{height:"500px",objectFit:'contain',width:'100%'}} />
            </Grid>
            <Grid
                item
                xl={6}
                lg={6}
                sm={6}
                xs={12}
              >
                  <NextLink
                    href="/"
                    passHref
                  >
                    <Button
                      component="a"
                      startIcon={<ArrowBackIcon fontSize="small" />}
                    >
                      Dashboard
                    </Button>
                  </NextLink>
                  <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ my: 1 }}>
                      <Typography
                        color="textPrimary"
                        variant="h4"
                      >
                        Sign in
                      </Typography>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        Sign in on the internal platform
                      </Typography>
                    </Box>
                  
                    <Box
                      sx={{
                        pb: 1,
                        pt: 3
                      }}
                    >
                    </Box>
                    <TextField
                      error={Boolean(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.email}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(formik.touched.password && formik.errors.password)}
                      fullWidth
                      helperText={formik.touched.password && formik.errors.password}
                      label="Password"
                      margin="normal"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      value={formik.values.password}
                      variant="outlined"
                    />
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        disabled={formik.isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Sign In Now
                      </Button>
                    </Box>
                    {/* <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      Don&apos;t have an account?
                      {' '}
                      <NextLink
                        href="/register"
                      >
                        <Link
                          to="/register"
                          variant="subtitle2"
                          underline="hover"
                          sx={{
                            cursor: 'pointer'
                          }}
                        >
                          Sign Up
                        </Link>
                      </NextLink>
                    </Typography> */}
                  </form>    
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Login;
