function Button({ text, link }) {
  return link ? (
    <a
      href={link}
      className="bg-brandRed py-2 md:py-[.75em] px-6 rounded-md text-md md:text-lg text-white hover:scale-105 max-w-fit hover:bg-white hover:text-brandRed border-2 border-brandRed"
    >
      {text}
    </a>
  ) : (
    <button className="bg-brandRed py-2 md:py-[.75em] px-6 rounded-md text-md md:text-lg text-white hover:scale-105 max-w-fit hover:bg-white hover:text-brandRed border-2 border-brandRed"
      >{text}
    </button>
  );
}

export default Button;
