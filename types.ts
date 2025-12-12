import React from 'react';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown-like string
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface LegalDoc {
  id: string;
  title: string;
  content: string;
}

export type PageRoute = 'HOME' | 'POST' | 'LEGAL' | 'TOOLS' | 'ABOUT';

export interface RouteState {
  page: PageRoute;
  params?: {
    id?: string;
    sectionId?: string;
  };
}