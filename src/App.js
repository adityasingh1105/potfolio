import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import HomeMenu from "./Homemenu/HomeMenu";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material/styles";
import ScrollToTopButton from "./ScrollToTopButton"; // Import ScrollToTopButton component
import ContactBlock from "./ContactBlock/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
      trailingX: 0,
      trailingY: 0,
    };
    this.cursor = React.createRef();
    this.cursorTrailing = React.createRef();
    this.animationFrame = null;
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseMove);
    this.moveCursor();
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onMouseMove);
    cancelAnimationFrame(this.animationFrame);
  }

  onMouseMove = (evt) => {
    const { clientX, clientY } = evt;
    this.setState({
      mouseX: clientX,
      mouseY: clientY,
    });
  };

  moveCursor = () => {
    const { mouseX, mouseY, trailingX, trailingY } = this.state;
    const diffX = mouseX - trailingX;
    const diffY = mouseY - trailingY;
    this.setState(
      {
        trailingX: trailingX + diffX / 10,
        trailingY: trailingY + diffY / 10,
      },
      () => {
        this.cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        this.cursorTrailing.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0)`;
        this.animationFrame = requestAnimationFrame(this.moveCursor);
      }
    );
  };

  render = () => {
    return (
      <ThemeProvider theme={createTheme}>
        <Router>
          <div className="container">
            <div className="cursors">
              <div className="cursor" ref={this.cursor} />
              <div className="cursor" ref={this.cursorTrailing} />
              <Navbar />

              <Routes>
                <Route path="/" element={
                  <>
                  <HomeMenu />
                  <FAQ/>
                  </>
              } />
              <Route path ="/contact" element={
            <ContactBlock />
            
              }/>
              </Routes>
              <Footer />
              <ScrollToTopButton />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
