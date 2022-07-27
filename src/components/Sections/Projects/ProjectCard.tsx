import {Box, Typography, Button, Divider} from '@mui/material';
import Image from 'next/image'
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {btnStyles} from '../Hero/Hero';

// let card = document.querySelector('.card');
// document.addEventListener('mousemove', function(e) {   let xAxis =
// (window.innerWidth / 2 - e.pageX) / 15;   let yAxis = (window.innerHeight / 2
// - e.pageY) / 10;   card.style.transform = `rotateY(${xAxis}deg)
// rotateX(${yAxis}deg)`; });

const ProjectCard = ({
    isReversed,
    img,
    repoUrl,
    siteUrl,
    title,
    description
} : any) => {

    const ref = useRef(null);

    const [cursorPosition,
        setCursorPosition] = useState({y: 0, x: 0})
    const [elementSize,
        setElementSize] = useState({x: 0, y: 0})
    const onMouseMove = (e : any) => {
        setCursorPosition({y: e.screenY, x: e.screenX})
    }

    useLayoutEffect(() => {
        if (ref && ref.current) 
            setElementSize({x: ref.current['offsetWidth'], y: ref.current['offsetHeight']});

        }
    , []);

    const rotation = `rotateY(${ (elementSize.x / 2 - cursorPosition.x) / 25}deg) rotateX(${ (elementSize.y / 2 - cursorPosition.y) / 30}deg)`

    return (
        <Box
            sx={{
            display: 'flex',
            my: {
                xs: '0em',
                sm: '1em',
                md: '3em'
            },
            flexDirection: {
                xs: 'column',
                md: `${isReversed
                    ? 'row'
                    : 'row-reverse'}`
            },
            alignItems: 'center'
        }}>
            <Box
                sx={{
                width: {
                    xs: '100%',
                    sm: '600px'
                },
                minWidth: {
                    xs: 'auto',
                    sm: '250px',
                    md: '390px'
                },
                height: '400px',
                position: 'relative'
            }}>

                <Image alt='Project Image' className='img1  ' layout='fill' src={`${img}`}/>
            </Box>
            <Box
                ref={ref}
                onMouseMove={onMouseMove}
                sx={{
                transition: ' all .1s ease',
                '&:hover': {
                    transform: {
                        xs: ` translateY(-25%)`,
                        md: `${rotation} ${isReversed
                            ? 'translateX(-25%)'
                            : 'translateX(25%)'}`
                    }
                },
                borderRadius: '6px',
                width: {
                    xs: '94%',
                    md: 'auto'
                },
                position: "relative",
                transform: {
                    xs: 'translateY(-25%)',
                    md: `${isReversed
                        ? 'translateX(-25%)'
                        : 'translateX(25%)'}`
                },
                maxWidth: '600px',
                padding: '2em 1.5em',
                textAlign: 'left',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                background: 'white',
                color: 'black',
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center'
            }}>

                <Box >

                    <Typography
                        color='black'
                        sx={{
                        fontSize: '1.4em',
                        fontWeight: '500',
                        pb: '.25em'
                    }}>
                        {title}
                    </Typography>
                    <Typography
                        color='black'
                        variant='h3'
                        sx={{
                        fontSize: '.9em',
                        fontWeight: '300'
                    }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo, voluptate
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo, voluptate
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo, voluptate
                        culpa ad perferendis, nostrum est totam voluptatum minima corporis vero
                        necessitatibus rerum, sit veritatis?
                    </Typography>
                    <Box
                        sx={{
                        gap: '.5em',
                        display: 'flex',
                        flexWrap: 'wrap',
                        mt: '1em'
                    }}>
                        <a href={`${siteUrl}`} rel="noreferrer" target="_blank">

                            <Button
                                variant='contained'
                                sx={{
                                ...btnStyles,
                                padding: '.5em .8em',
                                color: 'white',
                                border: '1px solid #0092ff'
                            }}>
                                <Typography fontSize='12px'>
                                    Live Site
                                </Typography>
                            </Button>
                        </a>
                        <a href={`${repoUrl}`} rel="noreferrer" target="_blank">

                            <Button
                                variant='text'
                                sx={{
                                ...btnStyles,
                                padding: '.5em .8em',
                                color: '#0092ff'
                            }}>
                                <Typography fontSize='12px'>
                                    Check Code
                                </Typography>
                            </Button>
                        </a>

                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default ProjectCard