import React from "react";

const ContactUs = () => {
  // const [formStatus, setFormStatus] = useState("Send");
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setFormStatus("Submitting...");
  //   const { name, email, message } = e.target.elements;
  //   let conFom = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   console.log(conFom);
  // };
  return (
    // <div className="container mt-5 flex w-full justify-center items-center flex-col">
    //   <h2 className="mb-3 text-5xl">Contact Us</h2>
    //   <form onSubmit={onSubmit}>
    //     <div className="mb-3 gap-4 flex justify-between">
    //       <label className="text-2xl" htmlFor="name">
    //         Name
    //       </label>
    //       <input className="border border-1" type="text" id="name" required />
    //     </div>
    //     <div className="mb-3 gap-4 flex justify-between">
    //       <label className="text-2xl" htmlFor="email">
    //         Email
    //       </label>
    //       <input className="border border-1" type="email" id="email" required />
    //     </div>
    //     <div className="mb-3 gap-4 flex justify-between">
    //       <label className="text-2xl" htmlFor="message">
    //         Message
    //       </label>
    //       <textarea
    //         className="border border-1 resize-none"
    //         id="message"
    //         required
    //       />
    //     </div>
    //     <button
    //       className="border bg-green-400 h-12 w-20 rounded text-white text-2xl"
    //       type="submit"
    //     >
    //       {formStatus}
    //     </button>
    //   </form>
    // </div>
    <div className="h-full w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-2xl font-extrabold text-white tracking-widest">
        Page is under maintance!
      </h1>
    </div>
  );
};

export default ContactUs;
