function Experience({
  company,
  role,
  from,
  to,
  description,
}: {
  company: string;
  role: string;
  from: string;
  to: string;
  description: string;
}) {
  return (
    <>
      <div className="pb-[20px] pl-[20px] mt-[5px] border-l border-green-cool relative last:pb-0 before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-full before:-left-[9px] before:top-0 before:bg-black before:border before:border-green-cool">
        <h3 className="text-sm font-bold text-green-cool uppercase">
          {company}
        </h3>
        <span className="inline-block text-slate-500">{role}</span>
        <p className="mt-2">
          <span className="text-sm text-green-cool font-bold">{from}</span> -{" "}
          {to}
        </p>
        <span className="inline-block mt-4 text-slate-300">{description}</span>
      </div>
    </>
  );
}

export default Experience;
