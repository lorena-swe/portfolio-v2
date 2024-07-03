interface Props {
  link: string;
}

const LinkedinButton = ({ link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-button"
    >
      <span className="linkedin-text">LinkedIn</span>
      <span className="linkedin-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#FFFFFF"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.854 0-2.137 1.447-2.137 2.943v5.663H9.354V9.001h3.414v1.561h.048c.476-.9 1.636-1.85 3.367-1.85 3.597 0 4.259 2.368 4.259 5.448v6.292zM5.337 7.433a2.06 2.06 0 1 1 0-4.121 2.06 2.06 0 0 1 0 4.12zM7.116 20.452H3.557V9h3.559v11.452zM22.225 0H1.771C.792 0 .009.778.009 1.736v20.527C.009 23.222.792 24 1.771 24h20.451c.979 0 1.771-.778 1.771-1.736V1.736C23.996.778 23.204 0 22.225 0z"
          />
        </svg>
      </span>
    </a>
  );
};

export default LinkedinButton;
