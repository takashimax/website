import React from "react";

function Works() {
  return (
    <>
      <div className="box-border mb-24 md:h-screen w-full  bg-[url('../src/img/bgview.webp')]">
        <div
          id="works"
          className="flex justify-center items-center py-16 text-5xl font-lilita">
          Works
        </div>
        <div className="flex justify-center items-center pb-16">
          <p className="">私がこれまでに制作した成果物をご紹介いたします。</p>
        </div>
        <div className="flex md:space-x-10 mx-4 max-md:flex-col max-md:space-y-10 max-md:justify-center max-md:items-center">
          <div className="max-md:flex max-md:ml-10 max-md:space-x-10">
            <img
              src="../src/img/works01.jpg"
              alt=""
              className="hover:scale-110 duration-500 cursor-pointer max-md:h-32 max-md:w-48"
            />
            <p className="pt-20 items-center justify-center flex">
              Takahi Taguchi Portfolio
            </p>
          </div>
          <div className="max-md:flex max-md:ml-10 max-md:space-x-10">
            <img
              src="../src/img/works02.jpg"
              alt=""
              className="hover:scale-110 duration-500 cursor-pointer max-md:h-32 max-md:w-48"
            />
            <p className="pt-20 items-center justify-center flex">
              Python 顔認証アプリ
            </p>
          </div>
          <div className="max-md:flex max-md:ml-10 max-md:space-x-10">
            <img
              src="../src/img/works03.jpg"
              alt=""
              className="hover:scale-110 duration-500 cursor-pointer max-md:h-32 max-md:w-48"
            />
            <p className="pt-20 items-center justify-center flex">
              Java 制作予定アプリ
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
