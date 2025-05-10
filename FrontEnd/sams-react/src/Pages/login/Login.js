import { Container, TextField, Box, Grid, InputAdornment, IconButton } from '@mui/material';
import './Login.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {

    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [userValidation, setUserValidation] = useState();
    const [pwdValidation, setPwdValidation] = useState();
    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const processLogin = () => {
        let userName = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        console.log(userName + " --- " + password)
        !userName || userName === undefined ?
            setUserValidation(t('userValidation'))
            : setUserValidation();
        !password || password === undefined ?
            setPwdValidation(t('pwdValidation'))
            : setPwdValidation();
        if (userName && password) {
            navigate('/dashboard');
        } else {
            navigate("/");
        }
    }

    return (
        <>
            <Box className="boxContainer" sx={{ pt: 3 }}>
                <Container className='login-container'>
                    <Box sx={{ p: 4 }}>
                        <Grid container spacing={5} className="grid-container">
                            <Grid size={12} className="samsLogin">
                                <p>{t('samslogin')}</p>
                            </Grid>
                            <Grid size={12}>
                                <TextField id='username'
                                    FormHelperTextProps={{
                                        className: 'loginTextField',
                                    }}
                                    type='text' sx={{ width: '100%' }}
                                    helperText={userValidation}
                                    error={userValidation}
                                    variant='outlined' label={t('username')} />
                            </Grid>
                            <Grid size={12}>
                                <TextField id="password" className='loginTextField'
                                    FormHelperTextProps={{
                                        className: 'loginTextField',
                                    }}
                                    sx={{ width: '100%' }}
                                    helperText={pwdValidation}
                                    error={pwdValidation}
                                    variant='outlined'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    type={showPassword ? 'text' : 'password'} label={t('password')} />
                            </Grid>
                            <Grid size={12}>
                                <Button onClick={processLogin} variant="contained">
                                    {t('login')}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
}


export default Login;