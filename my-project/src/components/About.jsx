import React from "react";

function About() {
  return (
    <>
      <div
        id="about"
        className="box-border h-screen w-full bg-cover bg-[url('../src/img/bgview.webp')]"
      >
        <div className="">
          <div className="flex justify-center items-center max-w-5xl mx-auto py-16 text-5xl font-lilita">
            About me
          </div>
          <div className="md:items-center md:space-x-3 md:justify-center  justify-center items-center flex max-md:flex-col">
            <div className="">
              <img src="../src/img/k0199_9.png" alt="" className="w-40 h-70 " />
            </div>
            <div className="md:w-4/12 pt-24 mx-10">
              <p className=" leading-10">
                奈良県出身のエンジニア。過去に2社で計6年程、既存顧客フォローと新規開拓中心の営業に従事。プログラミングの技術に興味を持ち、30歳で求職者支援訓練の訓練校に通いpythonとjavaを学んでいます。今後はエンジニアとして様々な知識を身に着けスキルの向上を図りたいと考えています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
