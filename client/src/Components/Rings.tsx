function Ring({
  size = "50px",
  color = "#ffbf00",
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}: {
  size: string;
  color: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
}) {
  return (
    <>
      <span
        className={`border-2 rounded-full w-[${size}] h-[${size}] bg-[${color}] top-[${top}] bottom-[${bottom}] left-[${left}] right-[${right}]`}
      ></span>
    </>
  );
}

export default Ring;
