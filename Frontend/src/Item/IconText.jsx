const IconText = ({Icon, Text, Tambahan, TextColor}) => {
  return (
    <div className="flex gap-4 items-center IconText ">
      <span className={`material-symbols-outlined text-${TextColor} text-3xl fill`}>{Icon}</span>
      <div className={`text-${TextColor}`}>
        <p className={`isi md:text-lg -mb-1.5 underline-offset-0  inline-block`}>{Text}</p>
        <p className="text-xs font-normal">{Tambahan}</p>
      </div>
    </div>
  );
};

export default IconText;
