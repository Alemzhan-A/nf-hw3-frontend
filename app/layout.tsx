"use client";

import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { PostsProvider } from './context/PostsContext';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Posts List App</title>
        <meta name="description" content="A simple posts list app built with Next.js, Tailwind CSS, and TypeScript" />
      </head>
      <body className="min-h-screen bg-white text-black flex flex-col">
        <ThemeProvider>
          <AuthProvider>
            <PostsProvider>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </PostsProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
