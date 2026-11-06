import React from "react";
import {
  ShieldCheck,
  Search,
  Network,
  Smartphone,
  FileText,
  Database,
  Layers,
  Key,
  Fingerprint,
  Server,
  Boxes,
  Code2
} from "lucide-react";

export const ReactIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextjsIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className}>
    <circle cx="90" cy="90" r="90" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="6" />
    <path d="M149.5 157.4L69.1 54H54V126H66.1V69.4L140 164.8C143.3 162.6 146.5 160.1 149.5 157.4Z" fill="currentColor" />
    <rect x="115" y="54" width="12" height="72" fill="currentColor" />
  </svg>
);

export const TypeScriptIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 8.5H11.5M7.75 8.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13.5 15.5C14.2 16.4 15.3 17 16.7 17C18.3 17 19.5 16 19.5 14.5C19.5 13.1 18.5 12.4 16.8 11.8L15.8 11.4C14.5 10.9 13.8 10.3 13.8 9.3C13.8 8.1 14.8 7.2 16.3 7.2C17.4 7.2 18.3 7.6 18.9 8.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const JavaScriptIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 13.5V15.5C7 16.6 7.7 17 8.8 17C9.9 17 10.5 16.4 10.5 15.2V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 15.5C14.7 16.4 15.8 17 17.2 17C18.8 17 20 16 20 14.5C20 13.1 19 12.4 17.3 11.8L16.3 11.4C15 10.9 14.3 10.3 14.3 9.3C14.3 8.1 15.3 7.2 16.8 7.2C17.9 7.2 18.8 7.6 19.4 8.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const HTML5Icon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 3L5.6 20.8L12 22.5L18.4 20.8L20 3H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
    <path d="M16.5 7H7.5L8 11.5H15.5L15 16.5L12 17.3L9 16.5L8.8 14H7.2L7.6 18.2L12 19.5L16.4 18.2L17 7.5L16.5 7Z" fill="currentColor" />
  </svg>
);

export const CSS3Icon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 3L5.6 20.8L12 22.5L18.4 20.8L20 3H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
    <path d="M7.5 7H16.5L16 11.5H8.5L8.8 14.5H15.5L15 16.8L12 17.6L9 16.8L8.8 15H7.2L7.6 18.5L12 19.7L16.4 18.5L17 7.5L7.5 7Z" fill="currentColor" />
  </svg>
);

export const TailwindIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

export const MaterialUIIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M0 2.475v10.39l3-1.733V5.94l6 3.465 6-3.465v6.93l3 1.733V2.475L9 7.673 0 2.475zm12 6.93l-3 1.732v6.93l3 1.733 3-1.733v-6.93l-3-1.732zm6 3.465l-3 1.733v6.93l3 1.732 6-3.464v-6.93l-6 3.464v-3.465zm-12 0l-6 3.465v6.93l6 3.464 3-1.732v-6.93l-3-1.733z" />
  </svg>
);

export const FramerMotionIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);

export const NodejsIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 2L21 7.2V17.6L12 22.8L3 17.6V7.2L12 2Z" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
    <path d="M12 7V17M12 12L17.5 15M6.5 15L12 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExpressIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M4 16L9 8M9 16L4 8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 14H19C19 12.3 17.7 11 16 11C14.3 11 13 12.3 13 14ZM13 14C13 15.7 14.3 17 16 17C17.2 17 18.2 16.3 18.7 15.3" strokeLinecap="round" />
  </svg>
);

export const DjangoIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.146 0h3.333v17.479c-1.02.167-1.896.229-2.625.229-3.771 0-5.458-1.708-5.458-5.062 0-3.333 1.833-5.271 4.75-5.271.771 0 1.354.125 2 .333V0zm0 10.021c-.438-.146-.875-.208-1.375-.208-1.583 0-2.5.958-2.5 2.875 0 1.875.875 2.812 2.458 2.812.438 0 .896-.042 1.417-.146v-5.333zM16.583 7.646h3.333v9.833c0 2.271-.479 3.875-1.438 4.792-.958.917-2.396 1.375-4.312 1.375-.729 0-1.542-.083-2.146-.229v-2.771c.542.125 1.146.188 1.812.188 1.958 0 2.75-.958 2.75-3.083V7.646zm.083-4.521c0-.521.188-.958.542-1.312.354-.354.812-.542 1.354-.542.521 0 .979.188 1.333.542.354.354.542.792.542 1.312 0 .521-.188.979-.542 1.333-.354.354-.812.542-1.333.542-.542 0-1-.188-1.354-.542-.354-.354-.542-.812-.542-1.333z" />
  </svg>
);

export const PostgreSQLIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 3C7 3 4 6.5 4 11C4 16.5 8 21 12 21C16 21 20 16.5 20 11C20 6.5 17 3 12 3Z" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
    <path d="M9 11C9 9.5 10.3 8 12 8C13.7 8 15 9.5 15 11V15C15 16.5 13.7 17 12 17C10.3 17 9 16.5 9 15V11Z" strokeLinejoin="round" />
    <path d="M7 13H5C4 13 3 14 3 15C3 16 4 17 5 17H7" strokeLinecap="round" />
    <path d="M17 13H19C20 13 21 14 21 15C21 16 20 17 19 17H17" strokeLinecap="round" />
  </svg>
);

export const MongoDBIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C11.66 0 11.23.36 11.11.85C9.75 6.32 5 10.25 5 14.88C5 19.34 8.13 23.3 12 24C15.87 23.3 19 19.34 19 14.88C19 10.25 14.25 6.32 12.89.85C12.77.36 12.34 0 12 0ZM11.45 2.65C11.55 3.32 11.75 4.3 11.95 5.5V21.65C9.07 20.9 6.8 18.06 6.8 14.88C6.8 11.3 10.27 8.07 11.45 2.65Z" />
  </svg>
);

export const SupabaseIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.447.288a1.298 1.298 0 0 0-1.428.16L1.173 9.77a1.3 1.3 0 0 0 .84 2.298h8.561l-4.52 10.87a1.3 1.3 0 0 0 2.268 1.114l10.846-9.323a1.3 1.3 0 0 0-.84-2.298h-8.56l4.52-10.87a1.298 1.298 0 0 0-.841-1.273z" />
  </svg>
);

export const MySQLIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="currentColor" fillOpacity="0.1" />
    <path d="M4 6V12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12V6" />
    <path d="M4 12V18C4 19.7 7.6 21 12 21C16.4 21 20 19.7 20 18V12" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const OpenAIIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.94a4.485 4.485 0 0 1 2.366-1.973V12.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.94zm15.864 3.791L12.36 9.362l2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.674 8.105v-5.659a.79.79 0 0 0-.403-.69zM20.1 7.67a4.47 4.47 0 0 1 .535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0L9.087 11.21V8.878a.08.08 0 0 1 .033-.062l4.84-2.796a4.5 4.5 0 0 1 6.14 1.649zM9.544 14.653l-2.02-1.168a.071.071 0 0 1-.038-.052V7.85a4.504 4.504 0 0 1 7.37-3.454l-.141.081-4.779 2.758a.795.795 0 0 0-.392.681v6.737zm1.106-2.653l2.85-1.645 2.85 1.645v3.29l-2.85 1.645-2.85-1.645z" />
  </svg>
);

export const GoogleGeminiIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

export const GitIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.707 10.293L13.707 2.293a.999.999 0 0 0-1.414 0l-1.996 1.996 2.502 2.502a2.497 2.497 0 0 1 3.167 3.172l2.436 2.436a2.495 2.495 0 0 1 3.305 3.305l.002.002a2.497 2.497 0 0 1-3.535 0 2.49 2.49 0 0 1-.581-2.723l-2.316-2.316v5.82a2.5 2.5 0 1 1-2 0V9.897a2.503 2.503 0 0 1-1.332-3.266L9.95 4.137 2.293 11.793a.999.999 0 0 0 0 1.414l8 8a.999.999 0 0 0 1.414 0l9.999-9.999a.997.997 0 0 0 .001-1.415z" />
  </svg>
);

export const GitHubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const PostmanIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.666 8.528l-2.025 8.1c-.083.332-.403.547-.736.495-.078-.012-.152-.043-.217-.089l-2.91-2.083-1.42 1.37a.546.546 0 0 1-.924-.388v-2.734l6.023-5.553c.12-.11.055-.306-.098-.328-.063-.009-.127.01-.173.052l-7.464 4.708-2.65-.845a.554.554 0 0 1-.035-1.042l11.75-4.527a.548.548 0 0 1 .71.692l-.176.174z" />
  </svg>
);

export const VercelIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 1L24 22H0L12 1Z" />
  </svg>
);

export const RenderIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 4.15 2.1 7.8 5.3 9.94l2.16-3.74C5.7 16.9 4.3 14.6 4.3 12c0-4.25 3.45-7.7 7.7-7.7s7.7 3.45 7.7 7.7c0 2.6-1.4 4.9-3.46 6.2l2.16 3.74C21.9 19.8 24 16.15 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const LemonSqueezyIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

export const PostHogIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M2.5 13.5C2.5 8 7 3.5 12.5 3.5C18 3.5 22.5 8 22.5 13.5C22.5 19 18 23.5 12.5 23.5C7 23.5 2.5 19 2.5 13.5ZM6 14C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14ZM14 14C14 15.1 14.9 16 16 16C17.1 16 18 15.1 18 14C18 12.9 17.1 12 16 12C14.9 12 14 12.9 14 14Z" />
  </svg>
);

export const StripeIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.4 12.784.4 7.012.4 2.905 3.379 2.905 8.167c0 6.643 8.932 5.568 8.932 8.441 0 .998-.813 1.488-2.378 1.488-2.665 0-5.467-1.198-7.228-2.22l-.934 5.626c1.696.883 4.887 1.548 8.187 1.548 6.079 0 10.37-2.907 10.37-7.922 0-7.078-9.014-5.787-9.014-8.497l3.136 2.519z" />
  </svg>
);

// Map of all technology components by key
export const getTechIcon = (name, size = 18, className = "") => {
  const iconMap = {
    // Row 1
    "JavaScript": <JavaScriptIcon size={size} className={className} />,
    "TypeScript": <TypeScriptIcon size={size} className={className} />,
    "React.js": <ReactIcon size={size} className={className} />,
    "Next.js": <NextjsIcon size={size} className={className} />,
    "HTML5": <HTML5Icon size={size} className={className} />,
    "CSS3": <CSS3Icon size={size} className={className} />,
    "Tailwind CSS": <TailwindIcon size={size} className={className} />,
    "Material UI": <MaterialUIIcon size={size} className={className} />,
    "Framer Motion": <FramerMotionIcon size={size} className={className} />,

    // Row 2
    "Node.js": <NodejsIcon size={size} className={className} />,
    "Express.js": <ExpressIcon size={size} className={className} />,
    "Django": <DjangoIcon size={size} className={className} />,
    "Django REST Framework": <Server size={size} className={className} />,
    "PostgreSQL": <PostgreSQLIcon size={size} className={className} />,
    "MongoDB": <MongoDBIcon size={size} className={className} />,
    "Supabase": <SupabaseIcon size={size} className={className} />,
    "MySQL": <MySQLIcon size={size} className={className} />,
    "JWT": <Key size={size} className={className} />,
    "Supabase Auth": <Fingerprint size={size} className={className} />,
    "Role-Based Access Control": <ShieldCheck size={size} className={className} />,
    "REST APIs": <Network size={size} className={className} />,

    // Row 3
    "OpenAI API": <OpenAIIcon size={size} className={className} />,
    "Google Gemini API": <GoogleGeminiIcon size={size} className={className} />,
    "Git": <GitIcon size={size} className={className} />,
    "GitHub": <GitHubIcon size={size} className={className} />,
    "Postman": <PostmanIcon size={size} className={className} />,
    "Vercel": <VercelIcon size={size} className={className} />,
    "Render": <RenderIcon size={size} className={className} />,
    "Lemon Squeezy": <LemonSqueezyIcon size={size} className={className} />,
    "PostHog": <PostHogIcon size={size} className={className} />,
    "Stripe": <StripeIcon size={size} className={className} />,
    "SaaS Architecture": <Boxes size={size} className={className} />,
    "SEO": <Search size={size} className={className} />,
    "PDF Processing": <FileText size={size} className={className} />,
    "Responsive Design": <Smartphone size={size} className={className} />,
    "CRUD Applications": <Database size={size} className={className} />
  };

  return iconMap[name] || <Code2 size={size} className={className} />;
};
