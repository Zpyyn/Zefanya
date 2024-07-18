const Buttons = ({ url, text, bg }) => {
  return (
    <a
      href={url}
      className={`${bg} text-light px-6 py-1.5 md:py-3 rounded-full  text-xs md:text-sm md:w-40`}
    >
      {text}
    </a>
  );
};

export default Buttons;
