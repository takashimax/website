import React, { useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ScrollReveal from "scrollreveal";

const RightScroll = ({ children }) => {
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        duration: 600,
        opacity: 0,
        distance: "60px",
        easing: "ease-in",
        origin: "right",
      });
    }
  }, []);

  return <section ref={sectionRef}>{children}</section>;
};

export { RightScroll };

function Skills() {
  const data = [
    { name: "HTML", 習熟度: 40 },
    { name: "CSS", 習熟度: 40 },
    { name: "Pytho", 習熟度: 30 },
    { name: "Java", 習熟度: 40 },
    { name: "MYSQL", 習熟度: 30 },
  ];
  return (
    <div id="skills" className="box-border md:h-full w-full relative">
      <div className="flex justify-center items-center py-16 text-5xl font-lilita">
        Skills
      </div>
      <div className="md:items-center md:space-x-3 md:justify-center md:flex flex-col justify-center items-center flex">
        <div className="md:w-4/12 pt-24 mx-10">
          <p className="text-justify leading-10">
            訓練で得た技術を習熟度合いを元に下にグラフ化してまとめました。自主学習ではpythonとjava
            に重点を置き基本文法をしっかりと抑えることに取り組みました。未熟な点はまだまだありますが、
            今後は専門性を深める為に得た技術に磨きをかけ、実際の開発現場に於いてはさらにスキルアップに努めたいと考えています。
          </p>
        </div>
      </div>
      <RightScroll>
        <div className="flex justify-center items-center pt-7">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            className="sm:w-20 sm:h-20 h-12 w-12 hover:scale-125 duration-500 lg:mr-32 md:mr-10 mr-4"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            className="sm:w-20 sm:h-20 h-12 w-12 hover:scale-125 duration-500 lg:mr-32 md:mr-10 mr-4"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            className="sm:w-20 sm:h-20 h-12 w-12 hover:scale-125 duration-500 lg:mr-32 md:mr-10 mr-4"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            className="sm:w-20 sm:h-20 h-12 w-12 hover:scale-125 duration-500 lg:mr-32 md:mr-10 mr-4"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            className="sm:w-20 sm:h-20 h-12 w-12 hover:scale-125 duration-500 lg:mr-32 md:mr-10 mr-4"
          />
        </div>
      </RightScroll>
      <div className="box-border h-screen w-full">
        <div className="w-3/4 h-2/4 flex justify-center items-center mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={300}
              height={150}
              data={data}
              margin={{ top: 60, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis ticks={[0, 20, 40, 60, 80, 100]} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="習熟度"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Skills;
