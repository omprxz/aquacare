// src/components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer footer-center p-6 bg-gray-200 text-gray-600">
      <div>
        <p className="text-sm">© 2024 Aquacare. All rights reserved.</p>
        <div className="mt-2 flex space-x-4">
          <Link href="/contact" className="link link-hover text-gray-800">Contact</Link>
          <Link href="/about" className="link link-hover text-gray-800">About</Link>
          <Link href="/privacy" className="link link-hover text-gray-800">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
