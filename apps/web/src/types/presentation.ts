export interface Presentation {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  slides: Slide[];
  template: string;
  theme: Theme;
}

export interface Slide {
  id: string;
  title: string;
  content: string;
  image?: string;
  notes: string;
  layout: LayoutType;
  elements: SlideElement[];
}

export interface SlideElement {
  type: ElementType;
  content: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  style: ElementStyle;
}

export type ElementType = 'text' | 'image' | 'chart' | 'video' | 'quote';

export type LayoutType = 'full' | 'split' | 'grid' | 'center';

export interface Theme {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  font: string;
  typography: Typography;
}

export interface Typography {
  heading: {
    size: number;
    weight: number;
    lineHeight: number;
  };
  body: {
    size: number;
    weight: number;
    lineHeight: number;
  };
}

export interface ElementStyle {
  color: string;
  backgroundColor: string;
  fontSize: number;
  fontWeight: number;
  textAlign: 'left' | 'center' | 'right';
  padding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  borderRadius: number;
  boxShadow?: string;
}
