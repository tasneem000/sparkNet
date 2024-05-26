import Link from 'next/link';
import { LinearGradient } from 'react-text-gradients';

const services = [
    
    {
    title: "Web development",
    description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
    pathname: "/services/web-development"
}
,

{
    title: "App development",
    description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
    pathname: "/services/web-development"
},

{
    title: "Digital Marketing",
    description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
    pathname: "/services/web-development"
},

{
    title: "Logo Design",
    description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
    pathname: "/services/web-development"
},

{
    title: "Photo Editing",
    description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
    pathname: "/services/web-development"
},

{
    title: "Video Editing",
    description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
    pathname: "/services/web-development"
}

]

const Services = () => {
    return (
        <div style={{padding: "50px 30px", background: '#13072E'}}>
            
            <h1 style={{color: 'white', fontSize: 60, textAlign: "center"}} className='my-2'>
                
            <LinearGradient gradient={['to left', '#4922a5 ,#ff68f0']}>
    Services
  </LinearGradient>

            </h1>

            <h2 className='text-white text-center' style={{fontSize: 25, margin: "30px 180px"}}>
                Experience Advanced Solutions From Concept To Deployment Leveraging Full-Stack Expertise
            </h2>

            <p className='text-white text-center my-4 mx-4'>
            Crafting Customized Solutions for Your Distinct Requirements, Spark Net&apos;s Services are Tailored to Elevate Your Business. Whether it&apos;s Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We&apos;re Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', margin: "100px 0"}}>

            {
                services.map((service) =>(
                
                    <div key={service}>
                        
                <Link href={service.pathname}>
                            
                <div className='service-card'>
                    
                    <h2>{service.title}</h2>

                </div>
                        </Link>

                </div>
                ))
            }
</div>
        </div>
    );
};

export default Services;