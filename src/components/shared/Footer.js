import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import sparkNetIcon from "@/assets/sparkNetIconFull.png"
import SendIcon from '@mui/icons-material/Send';
import { faFacebookF, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <Box className="bg-white px-2 py-10 rounded-t-3xl poppins">

            <footer sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} className="">

                    <Grid item xs={5}>

                        <Container>
                            <Container style={{ display: 'flex', alignItems: "center" }} className="py-5">
                                <Image src={sparkNetIcon} width={250} height={50} alt="Spark Net Icon" className="mx-2" />
                            </Container>

                            <Container className="py-5 mb-10">
                                <Typography variant="body2" className="poppins m-3">Get In Touch And Let&apos;s Work Together</Typography>
                                <div className="searchBox">

                                    <input className="searchInput" type="text" name="" placeholder="Enter your email" />
                                    <button className="searchButton" href="">
                                        <SendIcon className="mx-auto" />
                                    </button>
                                </div>
                            </Container>
                        </Container>
                    </Grid>

                    <Grid item xs={3}>
                        <Container className="my-5">

                            <Stack direction="column" justifyContent="center" >
                                <Typography variant="body1" className="poppins mb-4 text-start" style={{ color: "#13072E" }}>Services</Typography>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">App Development</Typography></Link>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">Web Development</Typography></Link>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">Logo Design</Typography></Link>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">Logo Design</Typography></Link>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">Logo Design</Typography></Link>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">Logo Design</Typography></Link>
                            </Stack>

                        </Container>

                    </Grid>

                    <Grid item xs={4}>
                        <Container className="my-5">

                            <Typography variant="body1" className="poppins mb-2 mx-2" style={{ color: "#13072E" }}>Social Links</Typography>

                            <div>

                                <ul className={styles.wrapper}>

                                    <li>
                                        <Link href="/" className={`${styles.icon} ${styles.facebook}`}>
                                            <span className={styles.tooltip}>Facebook</span>
                                            <FontAwesomeIcon icon={faFacebookF} style={{ width: 9 }} />
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/" className={`${styles.icon} ${styles.twitter}`} >
                                            <span className={styles.tooltip}>X</span>
                                            <FontAwesomeIcon icon={faXTwitter} style={{ width: 13 }} />
                                        </Link>
                                    </li>


                                    <li>
                                        <Link href="/" className={`${styles.icon} ${styles.instagram}`}>
                                            <span className={styles.tooltip}>Instagram</span>
                                            <FontAwesomeIcon icon={faInstagram} style={{ width: 13 }} className={styles.svg} />
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/" className={`${styles.icon} ${styles.linkedin}`}>
                                            <span className={styles.tooltip}>LinkedIn</span>
                                            <FontAwesomeIcon icon={faLinkedin} style={{ width: 13 }} />
                                        </Link>
                                    </li>



                                </ul>
                            </div>



                            <Stack direction="column">

                                <Typography variant="body1" className="poppins my-3 mx-2" style={{ color: "#13072E" }}>Company</Typography>
                                <Link href="/services/web-development" className="mx-2 my-1"><Typography className="poppins" variant="body2">About Us</Typography></Link>
                                <Link href="/services/web-development" className="mx-2 my-1"><Typography className="poppins" variant="body2">Happy Clients</Typography></Link>
                                <Link href="/services/web-development" className="mx-2 my-1"><Typography className="poppins" variant="body2">Logo Design</Typography></Link>
                            </Stack>

                        </Container>

                    </Grid>

                </Grid>
                <hr style={{ backgroundColor: '#ADACB8', height: 1, margin: "0 30px" }} />
                <Typography variant="body2" className="poppins text-center my-5">© Spark Net 2024 | This Website Is Made With ❣️ By SparkNet Corporation
                </Typography>
            </footer>

        </Box>
    );
};

export default Footer;