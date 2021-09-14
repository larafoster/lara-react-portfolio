import React from 'react';
import { ExternalLink } from 'react-external-link';

const Footer = () => {
  return (
    <>
              <div id="footer">
            <div className="container text-center">
                <div className="footer">
                    <p> &copy; 2021 <ExternalLink href="#top">Lara Foster</ExternalLink> </p>
                </div>
            </div>
        </div>
    </>
  );
}
export default Footer;