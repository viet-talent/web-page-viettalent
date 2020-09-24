import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenus from './BurgerMenus';
import Head from 'next/head';

const Header = () => {
  return (
    <React.Fragment>
      <Head>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      </Head>
      <header>
        <div id="sticky-header" className="main-menu-area menu-2 pl-45 pr-45">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 d-flex align-items-center">
                <div className="logo">
                  <Link href="/" as="/">
                    <img src={require('../../../../public/assets/img/logo/logo.png')} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <BurgerMenus pageWrapId={'burger-menu-bar'} outerContainerId={'header-wrap'} />
                <div className="main-menu text-right d-none d-lg-block">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href="/" as="/">
                          <a>
                            home{' '}
                            <i>
                              <FontAwesomeIcon icon={['fal', 'angle-down']} />
                            </i>
                          </a>
                        </Link>
                        <ul className="sub-menu text-left">
                          <li>
                            <Link href="/" as="/">
                              <a>home 1</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-2" as="/home-2">
                              <a>home 2</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/about" as="/about">
                          <a>About</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-1" as="/service-1">
                          <a>
                            Service{' '}
                            <i>
                              <FontAwesomeIcon icon={['fal', 'angle-down']} />
                            </i>
                          </a>
                        </Link>
                        <ul className="sub-menu text-left">
                          <li>
                            <Link href="/service-1" as="/service-1">
                              <a>Service One</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-2" as="/service-2">
                              <a>Service Two</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-3" as="/service-3">
                              <a>Service Three</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-manage" as="/service-manage">
                              <a>Service Manage</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/blog" as="/blog">
                          <a>
                            blog{' '}
                            <i>
                              <FontAwesomeIcon icon={['fal', 'angle-down']} />
                            </i>
                          </a>
                        </Link>
                        <ul className="sub-menu text-left">
                          <li>
                            <Link href="/blog" as="/blog">
                              <a>blog</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog" as="/monthly-web-development-to-update-react-hooks-cons-wether-says-1">
                              <a>blog details</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/" as="/">
                          <a>
                            Pages{' '}
                            <i>
                              <FontAwesomeIcon icon={['fal', 'angle-down']} />
                            </i>
                          </a>
                        </Link>
                        <ul className="sub-menu text-left">
                          <li>
                            <Link href="/case-1" as="/case-1">
                              <a>Case One</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-2" as="/case-2">
                              <a>Case Two</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-3" as="/case-3">
                              <a>Case Three</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/case-details" as="/case-details">
                              <a>Case Details</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/career" as="/career">
                              <a>Career</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/faq" as="/faq">
                              <a>Faq</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/goals" as="/goals">
                              <a>Goals</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/price" as="/price">
                              <a>Price</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/team" as="/team">
                              <a>Team</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/team-details" as="/team-details">
                              <a>Team Single</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop" as="/shop">
                              <a>Shop</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact" as="/contact">
                          <a>Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                <div class="header-right f-right ">
                  <div class="header-icon header-2-icon f-right">
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                      </i>
                    </a>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </i>
                    </a>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                      </i>
                    </a>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                      </i>
                    </a>
                  </div>
                  <div class="header-lang pos-rel f-right d-none d-xl-block">
                    <div className="lang-icon">
                      <img src={require('../../../../public/assets/img/icon/flag.png')} alt="" />
                      <a href="">
                        English{' '}
                        <i>
                          <FontAwesomeIcon icon={['fal', 'angle-down']} />
                        </i>
                      </a>
                    </div>
                    <ul className="header-lang-list">
                      <li>
                        <a href="#">USA</a>
                      </li>
                      <li>
                        <a href="#">UK</a>
                      </li>
                      <li>
                        <a href="#">CA</a>
                      </li>
                      <li>
                        <a href="#">AU</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div id="burger-menu-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
