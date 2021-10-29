import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../assets/backgroundImage.png';
import { CheckCircleFill, EnvelopeFill, Facebook, Instagram, Telegram } from 'react-bootstrap-icons';
import vk from '../../assets/vk.png';
import classes from './Introduction.module.css';
import ButtonToggleGroup from 'react-native-button-toggle-group';

const Introduction = () => {
    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <Container className="vh-100 d-flex flex-column" fluid>
            <Row style={{ flex: 1 }} className="h-100">
                <Col sm={5} className={classes.leftColumn}>
                    <Row className="h-25">
                        <Col>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="light" className={classes.selectedButton} value="en" onClick={changeLanguageHandler}>{t('landingpage.EN')}</Button>
                                <Button variant="light" value="ru" onClick={changeLanguageHandler}>{t('landingpage.RU')}</Button>
                            </ButtonGroup>
                            
                            <ButtonToggleGroup
                                highlightBackgroundColor={'blue'}
                                highlightTextColor={'white'}
                                inactiveBackgroundColor={'transparent'}
                                inactiveTextColor={'grey'}
                                values={['Auto', 'Light', 'Dark']}
                                value={value}
                                onSelect={val => setValue(val)}
                            />
                        </Col>
                    </Row>
                    <Row className="h-50">
                        <Col>
                            <h1 className={classes.planteTitle}>
                                {t('landingpage.appTitle')}
                            </h1>
                            <h2>
                                {t('landingpage.appDescription')}
                            </h2>
                            <Stack gap={3} className="mt-5">
                                <Row>
                                    <Col xs={1} md={1}>
                                        <CheckCircleFill width="24" height="24" fill="#F5BB08" />
                                    </Col>
                                    <Col className="d-flex" xs={17} md={11}>
                                        {t('landingpage.scanProduct')}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} md={1}>
                                        <CheckCircleFill width="24" height="24" fill="#F5BB08" />
                                    </Col>
                                    <Col className="d-flex" xs={17} md={11}>
                                        {t('landingpage.seeShopsProducts')}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} md={1}>
                                        <CheckCircleFill width="24" height="24" fill="#F5BB08" />
                                    </Col>
                                    <Col className="d-flex" xs={17} md={11}>
                                        {t('landingpage.addShopsProducts')}
                                    </Col>
                                </Row>
                            </Stack>
                            <Row className="mt-5" md={7} lg={7}>
                                <Col xs lg="4">
                                    <a target="_blank" rel="noreferrer" href='https://play.google.com/store/apps/details?id=vegancheckteam.plante&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className={classes.downloadButton} alt='Get it on Google Play' src={'assets/' + i18n.resolvedLanguage + '/google-play-badge.png'} /></a>
                                </Col>
                                <Col xs lg="2">
                                    <a href='https://apps.apple.com/us/app/plante/id1574070382' rel="noreferrer" target="_blank"><img className={classes.downloadButton} alt='Download on the App Store' src={'assets/' + i18n.resolvedLanguage + '/apple-app-store-badge.svg'} /></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="h-25">
                        <Col>
                            <Stack gap={3}>
                                <Row>
                                    <Col>
                                        <h5 className={classes.socialMediaTitle}>
                                            {t('landingpage.socialMediaTitle')}
                                        </h5>
                                    </Col>
                                </Row>
                                <Row xs="auto">
                                    <Col>
                                        <a href="mailto:plante.application@gmail.com">
                                            <EnvelopeFill className={classes.socialMediaIcon} />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href="https://t.me/joinchat/F9ub1kApyINjOTky" target="_blank" rel="noreferrer">
                                            <Telegram className={classes.socialMediaIcon} />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href="https://www.facebook.com/Plante-Vegan-App-103275182070684" target="_blank" rel="noreferrer">
                                            <Facebook className={classes.socialMediaIcon} />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href="https://vk.com/planteapp" target="_blank" rel="noreferrer">
                                            <Image src={vk} />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href={t('landingpage.instagram')} target="_blank" rel="noreferrer">
                                            <Instagram className={classes.socialMediaIcon} />
                                        </a>
                                    </Col>
                                </Row>
                            </Stack>
                        </Col>
                    </Row>
                </Col>
                <Col sm={7} className='d-md-block d-none'>
                    <Image src={backgroundImage} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Introduction;
