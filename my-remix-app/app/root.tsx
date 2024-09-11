import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import MyComponent from "./components/MyComponents"
import Navbar from "./components/Navbar"
import './styles/tailwind.css'
import Example from './components/Example'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Scripts />
        <Navbar />
        <div>
          <MyComponent />
          <Example />
          <Pricing />
          <Team />
          <Testimonials />
          <Blog />
        </div>
        
     
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
