/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MobileMenuOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <MobileMenuContent>
        <CloseButton onClick={onDismiss} aria-label="Menu">
          <Icon id="close" />
          <VisuallyHidden>Close menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </MobileMenuContent>
    </MobileMenuOverlay>
  );
};

const MobileMenuOverlay = styled(DialogOverlay)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(220deg, 5%, 40%, 0.8);
`;

const MobileMenuContent = styled(DialogContent)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Filler = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  padding: 16px;
  top: 16px;
  right: 6px;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  a {
    font-size: ${14 / 16}rem;
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-weight: ${WEIGHTS.normal};
  }
`;

export default MobileMenu;
