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

const Account = () => {
    const [pieSavings, setPieSavings] = useState(20)
    const [pieSavingsTwo, setPieSavingsTwo] = useState(30)
    const [pieSavingsThree, setPieSavingsThree] = useState(50)
    const [pieSavingsHolder, setPieSavingsHolder] = useState(pieSavings)
    const [pieSavingsTwoHolder, setPieSavingsTwoHolder] = useState(pieSavingsTwo)
    const [pieSavingsThreeHolder, setPieSavingsThreeHolder] = useState(pieSavingsThree)
  
    const [total, setTotal] = useState(100)
    const changeValue = (e) => {

      
        
     
        setPieSavingsHolder(Number(e.target.value))
        setTotal((total - pieSavingsHolder + Number(e.target.value)))

    }

    const changeValueTwo = (e) => {

        setPieSavingsTwoHolder(Number(e.target.value))
        setTotal((total - pieSavingsTwoHolder + Number(e.target.value)))
    }

    const changeValueThree = (e) => {

        setPieSavingsThreeHolder(Number(e.target.value))
        setTotal((total - pieSavingsThreeHolder + Number(e.target.value)))
    }

console.log('his', pieSavingsTwoHolder)
console.log('total', total, typeof(total))
const changeBudget = (e) => {
    if (total > 100 || total < 100) {
        alert("Total must equal 100. Adjust your budget values.")
    } else {
        setPieSavings(pieSavingsHolder);
        setPieSavingsTwo(pieSavingsTwoHolder);
        setPieSavingsThree(pieSavingsThreeHolder);
    }
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
                            width='80%'
                            justifyContent='space-around'
                            alignItems='center'
                        >
                            <img src='/userPic.jpg' className='account-pic-holder' />

                            <div className='user-info'>
                                <p className='new'>New member</p>
                                <p className='user-name'>Gabriela Richardson</p>
                                <p>Budget Aggresiveness: Standard</p>
                                <div className="button-wrap">
                                    <input type="file" id="file" />
                                    <label htmlFor="file">Upload new picture</label></div>
                            </div>
                        </Flex>
                        <Flex
                            height='50%'
                            justifyContent='center'
                            alignItems='center'
                            flexDir='column'
                        >
                            <Box
                                boxShadow='sm'
                                width='70%'
                                height='200px'
                                bg='white'
                                borderRadius='19px'
                            >

                            </Box>
                            <Flex
                                justifyContent='space-between'
                                alignItems='center'
                                width='30%'
                                margin='0 auto'
                                cursor='pointer'
                            >
                                <Text>Add another bank account</Text>

                                <FontAwesomeIcon style={{ color: '#43D8C9' }} className='plus-icon' icon={faPlus} />
                            </Flex>

                        </Flex>

                    </Flex>
                    <Flex
                        width='30%'
                        height='100%'
                        borderLeft='solid 2px #d5e4e8'
                        borderTopLeftRadius='19px'
                        flexDir='column'
                        justifyContent='space-between'
                        alignItems='center'
                        boxShadow='-11px 10px 10px 1px #dae9ed'
                    >
                        <Text>Set Budget Goals</Text>

                        <div className="slideContainerThree">
                            <p>Needs: <span id="value">{pieSavingsThreeHolder}</span></p>

                            <input onChange={changeValueThree} value={pieSavingsThreeHolder} type='range' min='0' max='50' id="myRange" className='sliderThree' />
                        </div>
                        <div className="slideContainerTwo">
                            <p>Wants: <span id="value">{pieSavingsTwoHolder}</span></p>

                            <input onChange={changeValueTwo} value={pieSavingsTwoHolder} type='range' min='0' max='30' id="myRange" className='sliderTwo' />
                        </div>
                        <div className="slideContainer">
                            <p>Savings: <span id="value">{pieSavingsHolder}</span></p>

                            <input onChange={changeValue} value={pieSavingsHolder} type='range' min='20' max='100' id="myRange" className='slider' />
                        </div>




    <p>Total: {total}</p>
<button onClick={changeBudget}>Change budget</button>
                        <PieChart
                            style={{ width: '150px' }}
                            data={[
                                { title: 'One', value: pieSavingsThree, color: '#43D8C9' },
                                { title: 'Two', value: pieSavingsTwo, color: '#076E8E' },
                                { title: 'Three', value: pieSavings, color: '#222831' },
                            ]}
                        />
                    </Flex>

                </Flex>

            </Flex>

        </BoxWrapper>
    )
}

export default Account;


{/* <div className='account-container'>
<section className='nav-account-holder'>
    <Navbar />
</section>
<section className='mobile-nav-account-holder'>
    <Navbar />
</section>
<div className='account-budget-holder'>
    <section className='account-holder'>
    <img src='/userPic.jpg' className='account-pic-holder' />
        <div className='user-info'>
            <p className='new'>New member</p>
            <p className='user-name'>Gabriela Richardson</p>
            <p>Budget Aggresiveness: Standard</p>
            <div className="button-wrap">
            <input type="file" id="file" /> 
<label for="file">Upload new picture</label></div>

                
                                        </div>
    </section>
    <section className='budget-holder'>

    </section>
</div>
</div> */}
