export type ProjectProps = {
  name: string;
  description: string;
  stack: string[];
  live: string;
  sourceCode: string;
};
type ImageFormat = {
  ext: number;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

type ImageFormats = {
  small: ImageFormat;
  medium: ImageFormat;
  thymbnail: ImageFormat;
};

type ProjectImage = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: null | string;
      caption: null | string;
      formats: ImageFormats;
      width: number;
      height: number;
      previewUrl: null | string;
      provider: string;
      provider_metadata: null | string;
      createdAt: string;
      updatedAt: string;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
    };
  };
};

type ProjectAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  sourceCodeUrl: string;
  projectImage: ProjectImage;
};

export type ProjectDataProps = {
  id: number;
  attributes: ProjectAttributes;
  divider?: boolean;
};
