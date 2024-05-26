"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import sparkNetIcon from "@/assets/sparkNetIconLight.png"
import { IconButton, Stack, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from 'next/link';

const navItems = [{
    route: "Home",
    pathName: "/"
},

{
    route: "Services",
    pathName: "/pages"
},


{
    route: "Portfolio",
    pathName: "/portfolio"
},
{
    route: "Happy Clients",
    pathName: "/reviews"
}
    ,
{
    route: "About",
    pathName: "/about"
}
];

function Navbar() {


    return (
        <header className="m-5 poppins">

            <AppBar position="static" className='shadow-lg' style={{ background: "linear-gradient(to left, #252764, #1d1d47, #292a70, #353b83)", borderRadius: 25 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Image src={sparkNetIcon} width={50} height={50} alt="Spark Net Icon" />

                        <Box className="w-full text-center">
                            {navItems.map((navItem) => (

                                <Link key={navItem} href={navItem.pathName}>
                                    <Button
                                        key={navItem}
                                        className='text-white poppins'
                                    >
                                        {navItem.route}
                                    </Button>

                                </Link>

                            ))}
                        </Box>


                        <Link href="#contact">
                            <Button className='p-2 rounded-full'>
                                <Stack direction="row" justifyContent="center" alignItems="center" sx={{ "& svg": { color: "white" } }}>
                                    <MailOutlineIcon />
                                    <p style={{ fontSize: 14, whiteSpace: 'nowrap', textTransform: 'none' }} className='mx-1 text-white poppins'>
                                        Contact Us
                                    </p>
                                </Stack>
                            </Button>
                        </Link>



                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}
export default Navbar;