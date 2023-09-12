import React from "react";

function Contact() {
  return (
    <>
      <div className="box-border mb-20 w-full">
        <div
          id="contact"
          className="flex justify-center items-center py-16 text-5xl font-lilita"
        >
          Contact
        </div>
        <div className="md:w-4/12 md:mx-auto mx-10">
          <p className="text-justify leading-10">
            最後までお読みいただきありがとうございます。少しでも私に興味を持っていただけたのなら幸いです。ご質問やお問い合わせなどありましたら、下記フォームをご利用ください。
          </p>
        </div>
        <div className="flex flex-col space-y-5 justify-center items-center pt-20">
          <input
            className="w-4/5 h-10 rounded border-2 border-zinc-300"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-4/5 h-10 rounded border-2 border-zinc-300"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="w-4/5 h-40 rounded border-2 border-zinc-300"
            type="text"
            placeholder="Message"
          />
          <button className="border-2 bg-blue-300 hover:scale-125 duration-500 py-4 px-8 rounded-sm">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
