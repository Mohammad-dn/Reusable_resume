const Contact = () => {
  return (
    <div className="flex flex-col gap-3 py-2">
      <h1 className="border-b-slate-600 border border-t-0 border-x-0 p-1 text-xl font-bold ">
        CONTACT
      </h1>
      <div className="pl-2 font-light">
        <div className="font-medium">addres:</div>
        <div>iran/shiraz</div>
      </div>
      <div className="pl-2 font-light">
        <div className="font-medium">phonenumber</div>
        <a
          className="underline text-sm font-bold bg-transparent cursor-pointer "
          href="tel: 09372370205"
        >
          09372370205
        </a>
      </div>
      <div className="pl-2 font-light">
        <div className="font-medium">emali:</div>
        <div className=" text-sm font-light underline">
          mdehghani497@gmail.com
        </div>
      </div>
      <div className="flex  gap-1">
        <div
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/mohamad-dehghani-6bb0a3205/"
            );
          }}
          className="pl-2 font-light "
        >
          <img
            className="cursor-pointer w-6"
            src="/src/assets/LinkedIn_icon.svg"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/Mohammad-dn");
          }}
          className="pl-2 font-light "
        >
          <img
            className="cursor-pointer w-6"
            src="/src/assets/icons8-github-96.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
