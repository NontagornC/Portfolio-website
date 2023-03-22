// import { SiVite } from "react-icons/si";
import { DiReact,DiHtml5,DiCss3,DiSass,DiJavascript1,DiBootstrap} from "react-icons/di";
import { SiTailwindcss,SiVite} from "react-icons/si";
import { e_commerce,currency_app,weather } from "../assets/assets";

export const projectData = [
  {
    id: 1,
    name: "Web Portfolio",
    des: "My web portfolio showcases my skills and experience as a web developer, highlighting my previous projects with an overview of my capabilities. With a user-friendly interface and a clean,  this portfolio is the perfect way for me to showcase my work",
    tool: (
      <div className="flex items-center text-[45px] gap-3 py-6">
        <DiReact/><SiTailwindcss/><SiVite/><DiCss3/><DiHtml5/><DiJavascript1/>
      </div>
    ),
    img:(
      <img src={e_commerce} alt="e-commerce app" />
    )
  },
  {
    id: 2,
    name: "Crypto Tracker",
    des: "This crypto tracker project uses the Coingecko API to provide real-time data on a wide range of cryptocurrencies, including detailed information on individual coins and their performance. With a user-friendly search function and detailed crypto exchange data, users can easily stay informed and make informed investment decisions.",
    tool: (
      <div className="flex items-center text-[45px] gap-3 py-6">
        <DiReact/><DiBootstrap/><DiSass /> <DiHtml5/><DiJavascript1/>
      </div>
    ),img:(
      <img src={currency_app} alt="e-commerce app" />
    )
  },
  {
    id: 3,
    name: "E-commerce app",
    des: " This React-based e-commerce app allows users to easily add products to their cart and browse items by category. The cart functionality allows for easy management of selected products and a streamlined checkout process.",
    tool: (
      <div className="flex items-center text-[45px] gap-3 py-6">
        <DiReact/> <DiSass /> <DiHtml5/> <DiCss3/><DiJavascript1/>
      </div>
    ),img:(
      <img src={e_commerce} alt="e-commerce app" />
    )
  },
  {
    id: 4,
    name: "Weather App",
    des: "My web weather app provides users with up-to-date information on current and future weather conditions in their area. With a user-friendly search function, users can quickly and easily find the weather forecast for their location, as well as view detailed information on upcoming weather patterns for the next 5 days. This app is the perfect tool for anyone looking to stay informed and plan their activities accordingly.",
    tool: (
      <div className="flex items-center text-[45px] gap-3 py-6">
        <DiReact/><SiTailwindcss/><SiVite/><DiCss3/><DiHtml5/><DiJavascript1/>
      </div>
    ),img:(
      <img src={weather} alt="e-commerce app" />
    )
  },
];
