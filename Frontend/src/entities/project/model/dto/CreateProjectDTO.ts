export interface CreateProjectDTO {
  name: string;
  description: string;
  shortDescription: string;
  ownerName: string;
  landingUrl: string;
  logoPhoto: File;
  projectPhoto?: File;
  documentation: File; 
}