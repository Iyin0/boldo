'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import logo from '@/assets/Logo.png';
import logo2 from '@/assets/Logo2.png';
import Link from 'next/link';
import pic1 from '@/assets/Frame219.png';
import pic2 from '@/assets/Group286.png';
import pic3 from '@/assets/Group264.png';
import card1 from '@/assets/Rectangle1270.png';
import card2 from '@/assets/Rectangle1270(1).png';
import card3 from '@/assets/Rectangle1270(2).png';
import img1 from '@/assets/Rectangle1270(3).png';
import img2 from '@/assets/Group208.png';
import img3 from '@/assets/Rectangle1270(4).png';
import pie from '@/assets/PieGraph.png';
import img4 from '@/assets/Ellipse4.png';
import img5 from '@/assets/Ellipse4(1).png';
import img6 from '@/assets/Ellipse4(2).png';
import img7 from '@/assets/Rectangle1270(5).png';
import img8 from '@/assets/Rectangle1270(6).png';
import img9 from '@/assets/Rectangle1270(7).png';
import img10 from '@/assets/Rectangle1270(8).png';
import img11 from '@/assets/Ellipse10.png';
import img12 from '@/assets/Ellipse10(1).png';
import img13 from '@/assets/Ellipse10(2).png';
import { v4 as uuidv4 } from 'uuid';


export default function Home() {
  // Generate a UUID
  const uuid = uuidv4();
  console.log(uuid);
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.circle}></div>
        <header>
          <Image src={logo} alt='boldo' width={0} height={0} />

          <div className={styles.links}>
            <Link href='/'>Product</Link>
            <Link href='/'>Services</Link>
            <Link href='/'>About</Link>
            <Link href='/' className={styles.login}>Login</Link>
          </div>
        </header>
        <div className={styles.landing}>
          <div className={styles.left}>
            <h1>Save time by building  fast with Boldo Template</h1>
            <p>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
            <div>
              <button>Buy template</button>
              <button>Explore</button>
            </div>
          </div>
          <div className={styles.right}>
            <Image className={styles.bigImg} src={pic1} alt='' width={0} height={0} />
            <div className={styles.statContainer}>
              <div>
                <Image src={pic2} alt='' width={0} height={0} />
              </div>
              <Image src={pic3} alt='' width={0} height={0} />
            </div>
          </div>
        </div>
        <div className={styles.logos}>
          <Image src={logo} alt='' width={0} height={0} />
          <Image src={logo2} alt='' width={0} height={0} />
          <Image src={logo} alt='' width={0} height={0} />
          <Image src={logo2} alt='' width={0} height={0} />
          <Image src={logo} alt='' width={0} height={0} />
          <Image src={logo2} alt='' width={0} height={0} />
        </div>
      </div>
      <div className={styles.services}>
        <h2>Our services</h2>
        <p className={styles.intro}>Handshake infographic mass market crowdfunding iteration.</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image src={card1} alt='' width={0} height={0} />
            <p>Cool feature title</p>
            <Link href={'/'}>
              Explore
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7L19 14L12 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className={styles.card}>
            <Image src={card2} alt='' width={0} height={0} />
            <p>Even cooler feature</p>
            <Link href={'/'}>
              Explore
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7L19 14L12 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className={styles.card}>
            <Image src={card3} alt='' width={0} height={0} />
            <p>Cool feature title</p>
            <Link href={'/'}>
              Explore
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7L19 14L12 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.sectionOne}>
        <div className={styles.left}>
          <Image className={styles.person} src={img1} alt='' width={0} height={0} />
          <div>
            <Image src={img2} alt='' width={0} height={0} />
            <p className={styles.percent}>30%</p>
            <p className={styles.income}>More income in June</p>
          </div>
        </div>
        <div className={styles.right}>
          <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
          <div>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#0A2640" />
              <path d="M26 12L15 23L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>We connect our customers with the best.</p>
          </div>
          <div>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#0A2640" />
              <path d="M26 12L15 23L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Advisor success customer launch party.</p>
          </div>
          <div>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#0A2640" />
              <path d="M26 12L15 23L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Business-to-consumer long tail.</p>
          </div>
          <button>Start now</button>
        </div>
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.left}>
          <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
          <div className={styles.first}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 8L2 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.5 15H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>We connect our customers with the best.</p>
          </div>
          <div>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_604_1519)">
                <path d="M1.7749 12.6543C1.7749 12.6543 5.7749 4.6543 12.7749 4.6543C19.7749 4.6543 23.7749 12.6543 23.7749 12.6543C23.7749 12.6543 19.7749 20.6543 12.7749 20.6543C5.7749 20.6543 1.7749 12.6543 1.7749 12.6543Z" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.7749 15.6543C14.4318 15.6543 15.7749 14.3112 15.7749 12.6543C15.7749 10.9974 14.4318 9.6543 12.7749 9.6543C11.118 9.6543 9.7749 10.9974 9.7749 12.6543C9.7749 14.3112 11.118 15.6543 12.7749 15.6543Z" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_604_1519">
                  <rect width="24" height="24" fill="white" transform="translate(0.774902 0.654297)" />
                </clipPath>
              </defs>
            </svg>
            <p>Advisor success customer launch party.</p>
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_604_1525)">
                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 1V3" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 21V23" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.21997 4.21997L5.63997 5.63997" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.3601 18.3601L19.7801 19.7801" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 12H3" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 12H23" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.21997 19.7801L5.63997 18.3601" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.3601 5.63997L19.7801 4.21997" stroke="#0A2640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_604_1525">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Business-to-consumer long tail.</p>
          </div>
        </div>
        <div className={styles.right}>
          <Image className={styles.person} src={img3} alt='' width={0} height={0} />
          <div className={styles.chart}>
            <Image src={pie} alt='' width={0} height={0} />
            <div className={styles.stats}>
              <div>
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="3.27504" cy="2.94469" rx="2.485" ry="2.47813" fill="#0DBBFC" />
                </svg>
                <p>35% -  Agile Development</p>
              </div>
              <div>
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="3.27504" cy="2.62975" rx="2.485" ry="2.47813" fill="#69E6A6" />
                </svg>
                <p>30% -  Investor bandwidth</p>
              </div>
              <div>
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="3.27504" cy="3.31505" rx="2.485" ry="2.47813" fill="#C4C4C4" />
                </svg>
                <p>35% -  A/B testing </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionThree}>
        <div className={styles.heading}>
          <h3>An enterprise template to ramp up your company website</h3>
          <div>
            <button>
              <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5 18L7.5 18" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 28.5L7.5 18L18 7.5" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button>
              <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 21H28.5" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 10.5L28.5 21L18 31.5" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.quote}>&ldquo;Buyer buzz partner network disruptive non-disclosure agreement business&rdquo;</p>
            <div className={styles.profile}>
              <Image src={img4} alt='' width={0} height={0} />
              <div>
                <p>Albus Dumbledore</p>
                <p>Manager @ Howarts</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p className={styles.quote}>&ldquo;Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.&rdquo;</p>
            <div className={styles.profile}>
              <Image src={img5} alt='' width={0} height={0} />
              <div>
                <p>Severus Snape</p>
                <p>Manager @ Slytherin</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p className={styles.quote}>&ldquo;Release facebook responsive web design business model canvas seed money monetization.&rdquo;</p>
            <div className={styles.profile}>
              <Image src={img6} alt='' width={0} height={0} />
              <div>
                <p>Harry Potter</p>
                <p>Team Leader @ Gryffindor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionFour}>
        <Image src={img7} alt='' width={0} height={0} />
        <div className={styles.container}>
          <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
          <Accordion.Root className={styles.AccordionRoot} type="single" collapsible>
            <Accordion.Item className={styles.AccordionItem} value="item-1">
              <Accordion.Trigger className={styles.AccordionTrigger} >
                We connect our customers with the best?
                <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
              </Accordion.Trigger>
              <Accordion.Content className={styles.AccordionContent}>-</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item className={styles.AccordionItem} value="item-2">
              <Accordion.Trigger className={styles.AccordionTrigger} >
                Android research & development rockstar?
                <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
              </Accordion.Trigger>
              <Accordion.Content className={styles.AccordionContent}>-</Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
      <div className={styles.blog}>
        <h2>Our Blog</h2>
        <h3>Value proposition accelerator product management venture</h3>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image src={img8} alt='' width={0} height={0} />
            <p className={styles.category}><strong>Category</strong> November 22, 2021</p>
            <p className={styles.text}>Pitch termsheet backing validation focus release.</p>
            <div>
              <Image src={img11} alt='' width={0} height={0} />
              <p>Chandler Bing</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={img9} alt='' width={0} height={0} />
            <p className={styles.category}><strong>Category</strong> November 22, 2021</p>
            <p className={styles.text}>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
            <div>
              <Image src={img12} alt='' width={0} height={0} />
              <p>Rachel Green</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src={img10} alt='' width={0} height={0} />
            <p className={styles.category}><strong>Category</strong> November 22, 2021</p>
            <p className={styles.text}>Beta prototype sales iPad gen-z marketing network effects value proposition</p>
            <div>
              <Image src={img13} alt='' width={0} height={0} />
              <p>Monica Geller</p>
            </div>
          </div>
        </div>
        <button>Load more</button>
      </div>
      <div className={styles.enterprise}>
        <div>
          <div className={styles.circle}></div>
          <h3>An enterprise template to ramp up your company website</h3>
          <form>
            <input type="email" placeholder='Your email address' />
            <button>Start now</button>
          </form>
        </div>
      </div>
      <footer>
        <div className={styles.left}>
          <Image src={logo} alt='' width={0} height={0} />
          <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
          <p>All rights reserved.</p>
        </div>
        <div className={styles.right}>
          <div>
            <h4>Landing</h4>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Products</Link>
            <Link href={'/'}>Services</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Career <span>Hiring!</span></Link>
            <Link href={'/'}>Services</Link>
          </div>
          <div>
            <h4>Resources</h4>
            <Link href={'/'}>Blog</Link>
            <Link href={'/'}>Products</Link>
            <Link href={'/'}>Services</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
