import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import newTab from '../assets/images/open_in_new-24px.svg';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>
          We conduct experiments that
          <br />
          may or may not seriously
          <br />
          break the universe
        </h2>
      </header>

      <div className="box alt container">
        <section className="feature left">
          <a href="/#" className="image icon fa-signal">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h3>The First Thing</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="/#" className="image icon fa-code">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h3>The Second Thing</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section>
        <section className="feature left">
          <iframe
            className="image"
            width="50%"
            height="100%"
            src="https://www.youtube.com/embed/oy_F6FqxFjA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="content">
            <h3>Example Trial</h3>
            <p>
              The split view of the concept for the minimized trials. A
              simplified version of the studies original intent.
            </p>
          </div>
        </section>
      </div>
      <footer className="major container medium">
        <h1>
          Related Work
          <br />&<br />
          Inspiration
        </h1>
      </footer>
      <div className="box alt container">
        <section className="feature left">
          <iframe
            className="image"
            width="50%"
            height="100%"
            src="https://www.youtube.com/embed/IMiHyTDCE4o"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="content">
            <h3>
              <a
                target="_blank"
                href="https://www.uni-ulm.de/fileadmin/website_uni_ulm/iui.inst.100/institut/mitarbeiterbereiche/rietzler/ConveyingThePerception.pdf"
              >
                Kinesthetic Feedback <img src={newTab} />
              </a>
            </h3>
            <p>
              "While most systems include and make use of the possibility to
              create tactile feedback through vibration, kinesthetic feedback
              systems almost exclusively rely on external mechanical hardware to
              induce actual sensations so far."
            </p>
          </div>
        </section>
        <section className="feature right">
          <iframe
            className="image"
            width="50%"
            height="100%"
            src="https://www.youtube.com/embed/CrQydnzpBdo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="content">
            <h3>
              <a
                target="_blank"
                href="https://ieeexplore.ieee.org/document/6184193"
              >
                Redirected Touch <img src={newTab} />
              </a>
            </h3>
            <p>
              "This paper instead further explores Redirected Touching, a
              perception-based technique for addressing the inflexibility of
              passive haptic displays [..]. The technique generates different
              mappings between real and virtual space such that a single real
              object can provide haptic feedback for many differently shaped
              virtual objects."
            </p>
          </div>
        </section>
        <section className="feature left">
          <iframe
            className="image"
            width="50%"
            height="100%"
            src="https://www.youtube.com/embed/-irhq_-PnkQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="content">
            <h3>
              <a
                target="_blank"
                href="https://dl.acm.org/doi/pdf/10.1145/3173574.3173724?download=true"
              >
                Visuo-Haptic Illusions <img src={newTab} />
              </a>
            </h3>
            <p>
              "In this work, we utilize visuo-haptic illusions to improve the
              perceived performance of encountered-type haptic devices,
              specifically shape displays, in virtual reality."
            </p>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
