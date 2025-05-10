import { Container, Typography } from "@mui/material"
import "./Dashboard.css"
import { useTranslation } from "react-i18next"

const Dashboard = () => {

    const {t} = useTranslation();

    return (
        <Container
            className="container">
            <Typography className="dashTypo">
                {t('welcomeMessage')}
            </Typography>
        </Container>
    )
}

export default Dashboard