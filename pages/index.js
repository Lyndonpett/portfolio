import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import Image from 'next/image';
import headshot from '../public/headshot.jpg';
import coding from '../public/coding.png';
import server from '../public/server.png';
import debug from '../public/debug.png';
import web1 from '../public/shell.jpg';
import web2 from '../public/hbnb.png';
import web3 from '../public/bobrosspaint.jpg';
import web4 from '../public/kahuna.png';
import web5 from '../public/wordle.jpg';
import web6 from '../public/discord.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Lyndon Pettersson Portfolio</title>
        <meta name="description" content="Personal website for Full Stack Software Engineer Lyndon Pettersson." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900">
        <section className="min-h-screen mb-12 md:mb-16">
          <nav className="py-10 mb-20 flex justify-between">
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer lg:text-2xl text-xl dark:text-white hover:dark:text-gray-400 hover:text-gray-400"
            />
            <ul className="flex items-center font-bold">
              <li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <a
                  className="bg-gradient-to-tl from-custom-blue to-custom-pink text-white px-4 py-2 rounded-md"
                  href="https://forms.gle/JyzBh4DRAd1MyuWP9"
                >
                  Contact
                </a>
              </li>
              <li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <a
                  className="bg-gradient-to-br from-custom-blue to-custom-pink text-white px-4 py-2 rounded-md ml-2 "
                  href="https://www.canva.com/design/DAFW6RlimXU/ml5K1vn3i2IOFnSsm4oSEA/view?utm_content=DAFW6RlimXU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-6">
            <h2 className="text-5xl py-2 text-custom-sky font-medium md:text-6xl dark:text-custom-blue">
              Lyndon Pettersson
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Software Engineer
            </h3>
            <p className="font-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
              Software engineer with a passion for developing efficient and
              scalable software. Join me as I am currently open to work
              opportunities, so if you have an interesting project or simply
              want to talk, feel free to contact me!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              className="dark:text-gray-200 hover:dark:text-gray-600 hover:text-gray-400"
              href="https://twitter.com/lyndon_pett"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              className="dark:text-gray-200 hover:dark:text-gray-600 hover:text-gray-400"
              href="https://www.linkedin.com/in/lyndonpettersson/"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="dark:text-gray-200 hover:dark:text-gray-600 hover:text-gray-400"
              href="https://github.com/lyndonpett"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto w-80 h-80 mt-20 md:h-96 md:w-96">
            <Image src={headshot} alt="headshot" className="rounded-full" />
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Since the beginning of my tech journey, I have done on-site and
              remote work as a student for
              <span className="text-custom-pink font-bold">
                &nbsp;Holberton Tulsa
              </span>
              , as well as consulted and collaborated with talented colleagues
              to complete and improve projects, whether it be business or
              consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I provide a wide range of skills including helping with the design
              and development of software, testing and debugging software to
              keep it optimized, and teaching others by working with them to
              help improve themselves technically.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-br dark:from-custom-blue dark:to-custom-pink flex-1">
              <Image src={coding} alt="coding" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Web Development</h3>
              <p className="py-2 text-gray-700">
                Creating responsive and efficient web applications.
              </p>
              <h4 className="py-4 text-custom-pink font-bold dark:text-blue-700">
                Tools I Use:
              </h4>
              <p className="text-gray-800 py-1">HTML | CSS | JS</p>
              <p className="text-gray-800 py-1">Various Web Frameworks</p>
              <p className="text-gray-800 py-1">TypeScript | NPM | GitHub</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-tl dark:from-custom-blue dark:to-custom-pink flex-1">
              <Image src={server} alt="coding" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Database Management
              </h3>
              <p className="py-2 text-gray-700">
                Creating and maintaining efficient database systems.
              </p>
              <h4 className="py-4 text-custom-pink font-bold dark:text-blue-700">
                Tools I Use:
              </h4>
              <p className="text-gray-800 py-1">NoSQL | SQL | MySQL</p>
              <p className="text-gray-800 py-1">
                MySQLDB | SQLAlchemy | Python
              </p>
              <p className="text-gray-800 py-1">Pandas | DataDog</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-tr dark:from-custom-blue dark:to-custom-pink flex-1">
              <Image src={debug} alt="coding" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Debugging</h3>
              <p className="py-2 text-gray-700">
                Finding, reporting, and fixing bugs in the provided software.
              </p>
              <h4 className="py-4 text-custom-pink font-bold dark:text-blue-700">
                Tools I Use:
              </h4>
              <p className="text-gray-800 py-1">Chrome & Firefox DevTools</p>
              <p className="text-gray-800 py-1">VScode</p>
              <p className="text-gray-800 py-1">GDB | Valgrind</p>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              From a low-level Shell CLI to creating a responsive web
              application. Here are some of my projects that I have worked on.
              Please feel free to
              <span className="text-custom-pink font-bold">&nbsp;click</span> on
              the image and follow the link to GitHub!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://github.com/Lyndonpett/simple_shell">
                <Image
                  className="rounded-lg object-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt={web1}
                  src={web1}
                />
              </a>
              <p className="text-sm text-center font-medium text-custom-sky dark:text-custom-blue">
                Simple Shell - UNIX CLI
              </p>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/IsaacGreenMachine/AirBnB_clone_v4">
                <Image
                  className="rounded-lg object-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt={web2}
                  src={web2}
                />
              </a>
              <p className="text-sm text-center font-medium text-custom-sky dark:text-custom-blue">
                AirBnBClone - Web App
              </p>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/treserio/whatsoutsidebob">
                <Image
                  className="rounded-lg object-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt={web3}
                  src={web3}
                />
              </a>
              <p className="text-sm text-center font-medium text-custom-sky dark:text-custom-blue">
                What&apos;s Outside, Bob? - Web App [WIP]
              </p>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/Lyndonpett/kahuna">
                <Image
                  className="rounded-lg object-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt={web4}
                  src={web4}
                />
              </a>
              <p className="text-sm text-center font-medium text-custom-sky dark:text-custom-blue">
                Kahuna - Custom Front-End
              </p>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/Lyndonpett/Wordle-Clone">
                <Image
                  className="rounded-lg object-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt={web5}
                  src={web5}
                />
              </a>
              <p className="text-sm text-center font-medium text-custom-sky dark:text-custom-blue">
                Wordle Clone - Web App
              </p>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/Lyndonpett/JavaScript-Discord-Voice-Bot">
                <Image
                  className="rounded-lg object-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt={web6}
                  src={web6}
                />
              </a>
              <p className="text-sm text-center font-medium text-custom-sky dark:text-custom-blue">
                Discord Voice Bot
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
