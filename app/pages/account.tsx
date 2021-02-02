import React, { useState, useEffect } from 'react';
import TopDashboard from '../components/topDashboard';
import MidDashboard from '../components/midDashboard';
import Bottomdashboard from '../components/bottomDashboard';
import Navbar from '../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ThemeProvider, ColorModeProvider, CSSReset, Box, FlexProps, Flex, Button, Text } from '@chakra-ui/react';
import { FlexSetting, ButtonSetting, MainWrapperSetting } from '../components/ui/chakra-ui/chakra-settings';
import { BoxWrapper } from '../components/ui/chakra-ui/chakra-components';
import { PieChart } from 'react-minimal-pie-chart';
import ReactSlider from 'react-slider';
import Axios from 'axios';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Modal, Container, Row, Col } from 'react-bootstrap';

const Account = (props) => {
    const [pieSavings, setPieSavings] = useState(20)
    const [pieWants, setPieWants] = useState(30)
    const [pieNeeds, setPieNeeds] = useState(50)
    const [pieSavingsHolder, setPieSavingsHolder] = useState(pieSavings)
    const [pieWantsHolder, setPieWantsHolder] = useState(pieWants)
    const [pieNeedsHolder, setPieNeedsHolder] = useState(pieNeeds);
    const [type, setType] = useState('Standard')
    const [imageSelected, setImageSelected] = useState('')
    const [newImage, setNewImage] = useState('')
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //total budget percentage
    const [total, setTotal] = useState(100)

    console.log(imageSelected)
    //changes bar value of savings through an onchange handler  
    const changeValue = (e) => {
        setPieSavingsHolder(Number(e.target.value))
        setTotal((total - pieSavingsHolder + Number(e.target.value)))

    }

    //changes bar value of wants through an onchange handler  
    const changeValueTwo = (e) => {
        setPieWantsHolder(Number(e.target.value))
        setTotal((total - pieWantsHolder + Number(e.target.value)))
    }

    //changes bar value of needs through an onchange handler  
    const changeValueThree = (e) => {
        setPieNeedsHolder(Number(e.target.value))
        setTotal((total - pieNeedsHolder + Number(e.target.value)))
    }


    // function first checks to see if the users new values add to a total of 100% and if they do state will be updated
    //Lastly this function checks how much a user is savings and depending on that sets their level of agrressiveness
    const changeBudget = (e) => {
        if (total > 100 || total < 100) {
            alert("Total must equal 100. Adjust your budget values.")
        } else {
            setPieSavings(pieSavingsHolder);
            setPieWants(pieWantsHolder);
            setPieNeeds(pieNeedsHolder);
            if (pieSavingsHolder > 40 && pieSavingsHolder <= 60) {
                setType('High')
            } else if (pieSavingsHolder > 60) {
                setType('Very High')
            } else {
                setType('Standard')
            }
        }
    }

    // a function that takes in a number and percent and returns a single value
    function percentage(num, per) {
        return (num / 100) * per;
    }

    const uploadImage = (files) => {
        if (imageSelected) {
            const formData = new FormData()
            formData.append("file", imageSelected)
            formData.append("upload_preset", "lwuwud4r")
            Axios.post("https://api.cloudinary.com/v1_1/drgfyozzd/image/upload", formData)
                .then((res) => {
                    console.log(res)
                    setNewImage(res.data.url)
                })
        }
    }

    function MydModalWithGrid(props) {
        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Enter New Card
              </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container className='align-content-md-center' style={{ height: '50vh' }}>
                        <Flex
                            height='80%'
                            justifyContent='space-around'
                            flexDir='column'
                            alignItems='center'
                        >
                            <input placeholder='Debit or credit card number' style={{ height: '40px', width: '80%', border: '1px solid gray', borderRadius: '5px' }} />
                            <input placeholder='Name on card' style={{ height: '40px', width: '80%', border: '1px solid gray', borderRadius: '5px' }} />
                            <input placeholder='Expiration date ex: 01/23' style={{ height: '40px', width: '80%', border: '1px solid gray', borderRadius: '5px' }} />
                            <input placeholder='Security code' style={{ height: '40px', width: '80%', border: '1px solid gray', borderRadius: '5px' }} />
                            <Button
                                width='80%'
                                bg='#16213e'
                                color='white'
                                marginLeft='5px'

                            >Link Card</Button>
                        </Flex>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }


    return (
        <BoxWrapper>
            <Flex
                width='100%'
                alignItems='flex-end'
                height='100vh'
                justifyContent='center'
            >
                <Flex
                    marginBottom='145px'
                    width='10%'
                    flexDir='column'
                >
                    <Navbar />
                </Flex>
                {/* Account and budget holder */}
                <Flex
                    height='90vh'
                    width='90%'
                    background='#EEEFF3'
                    borderRadius='10px'
                    justifyContent='center'
                >
                    <Flex
                        height='100%'
                        width='60%'
                        flexDir='column'
                    >
                        <Flex
                            margin='0 auto'
                            height='50%'
                            width='70%'
                            justifyContent='space-around'
                            alignItems='center'
                        >
                            <img src={newImage === '' ? 'user.svg' : newImage} className='account-pic-holder' />

                            <Flex
                                flexDir='column'
                                height='59%'
                                justifyContent='space-between'
                                className='user-info'>
                                <p className='new'>New member</p>
                                <p className='user-name'>Gabriela Richardson</p>
                                <p>Budget Aggresiveness: {type}</p>
                                <Flex
                                    width='100%'
                                    justifyContent='space-between'
                                    marginTop='13px'
                                >
                                    <input type="file" id="file" onChange={(e) => { setImageSelected(e.target.files[0]) }} />
                                    <label htmlFor="file">Select file</label>
                                    <Button
                                        width='80%'
                                        bg='#16213e'
                                        color='white'
                                        marginLeft='5px'
                                        onClick={uploadImage} >Upload photo</Button>
                                </Flex>
                                {imageSelected ? <Text>{imageSelected.name}</Text> : null}
                            </Flex>
                        </Flex>
                        <Flex
                            height='50%'
                            justifyContent='center'
                            alignItems='center'
                            flexDir='column'
                        >
                            <Box


                            >
                                <Flex
                                    height='100%'
                                    justifyContent='center'
                                    alignItems='center'
                                    flexDir='column'
                                >
                                    <Flex
                                        w='100%'
                                        margin='0 auto'
                                        justifyContent='center'
                                    >
                                        <Text
                                            textAlign='center'
                                            margin='0 auto'
                                            width='80%'
                                            justifyContent='center'
                                            fontWeight='bold'
                                            paddingBottom='10px'

                                        >My Cards</Text></Flex>

                                    <Flex
                                        className='cards-container'
                                        alignItems='center'
                                        margin='0 auto'
                                        width='300px'

                                        justifyContent='center'
                                        paddingBottom='10px'
                                    >

                                        <Carousel className='bank-cards' interval={2000} infiniteLoop={true} showStatus={false} showArrows={true} showIndicators={true} showThumbs={false} autoPlay >

                                            <Cards

                                                cvc=''
                                                expiry=''
                                                focused=''
                                                name='Gabriela Richardson'
                                                number='6011'
                                            />

                                            <Cards

                                                cvc=''
                                                expiry=''
                                                focused=''
                                                name='Gabriela Richardson'
                                                number='5446'
                                            />

                                        </Carousel>

                                    </Flex>

                                </Flex>
                            </Box>


                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                <Flex
                                    justifyContent='center'
                                    alignItems='center'
                                    width='80%'

                                    cursor='pointer'
                                >

                                    <Text
                                        paddingRight='5px'
                                    >Add another bank account</Text><FontAwesomeIcon style={{ color: '#222831', fontSize: '15px', paddingBottom: '3px' }} className='plus-icon' icon={faPlus} />
                                </Flex>
                            </Button>

                            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />


                        </Flex>

                    </Flex>
                    <Flex
                        width='40%'
                        height='100%'
                        borderLeft='solid 2px #d5e4e8'
                        borderTopLeftRadius='19px'
                        flexDir='column'
                        justifyContent='space-around'
                        alignItems='center'
                        boxShadow='-11px 10px 10px 1px #dae9ed'
                    >
                        <Text
                            fontWeight='400'
                            fontSize='1.2rem'
                            color='#076E8E'
                        >Set Budget Goals</Text>
                        <Flex
                            alignItems='center'
                            width='80%'
                            flexDir='column'
                            bg='#dae9ed'
                            padding='25px'
                            borderRadius='19px'
                        >
                            <div className="slideContainerThree">
                                <p>Needs: <span id="value">{pieNeedsHolder}%</span></p>

                                <input onChange={changeValueThree} value={pieNeedsHolder} type='range' min='0' max='50' id="myRange" className='sliderThree' />
                            </div>
                            <div className="slideContainerTwo">
                                <p>Wants: <span id="value">{pieWantsHolder}%</span></p>

                                <input onChange={changeValueTwo} value={pieWantsHolder} type='range' min='0' max='30' id="myRange" className='sliderTwo' />
                            </div>
                            <div className="slideContainer">
                                <p>Savings: <span id="value">{pieSavingsHolder}%</span></p>

                                <input onChange={changeValue} value={pieSavingsHolder} type='range' min='20' max='100' id="myRange" className='slider' />
                            </div>
                        </Flex>
                        <p>% must equal "100": {total}%</p>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Launch modal with grid
      </Button>

                        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />                        <Flex
                            width='90%'
                            justifyContent='space-around'
                            alignItems='flex-start'

                        >
                            <PieChart
                                style={{ width: '150px' }}
                                data={[
                                    { title: 'One', value: pieNeeds, color: '#43D8C9' },
                                    { title: 'Two', value: pieWants, color: '#076E8E' },
                                    { title: 'Three', value: pieSavings, color: '#222831' },
                                ]}
                            />
                            <Flex
                                flexDir='column'
                                justifyContent='space-between'
                                height='80%'
                            >
                                <Text
                                    bg='#222831'
                                    color='white'
                                    padding='10px'
                                >Monthly Budget: $3523.34</Text>
                                <Text color='#43D8C9' fontWeight='bolder'>Needs: ${Number(percentage(3523.34, pieNeeds).toFixed(2))}</Text>
                                <Text color='#076E8E' fontWeight='bolder'>Wants: ${Number(percentage(3523.34, pieWants).toFixed(2))}</Text>
                                <Text color='#222831' fontWeight='bolder'>Savings: ${Number(percentage(3523.34, pieSavings).toFixed(2))}</Text>

                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>

            </Flex>
        </BoxWrapper>
    )
}

export default Account;


