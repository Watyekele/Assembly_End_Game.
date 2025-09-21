export default function Languages() {
  const store = [
    {
      id: "1",
      name: "HTML",
      textcolor: "white",
      bgColor: "rgba(253, 107, 7, 1)",
    },
    {
      id: "2",

      name: "CSS",
      textcolor: "white",
      bgColor: "rgba(73, 7, 253, 0.79)",
    },
    {
      id: "3",
      name: "Javascript",
      textcolor: "black",
      bgColor: "rgba(174, 235, 32, 1)",
    },
    {
      id: "4",
      name: "Typescript",
      textcolor: "white",
      bgColor: "rgba(22, 145, 186, 1)",
    },
    {
      id: "5",
      name: "Nodejs",
      textcolor: "white",

      bgColor: "rgba(253, 107, 7, 1)",
    },
    {
      id: "6",
      textcolor: "black",

      name: "Python",
      bgColor: "rgba(174, 235, 32, 1)",
    },
    {
      id: "7",
      name: "Ruby",
      textcolor: "white",

      bgColor: "rgba(253, 107, 7, 1)",
    },
    {
      id: "8",
      name: "Assembly",
      textcolor: "white",

      bgColor: "rgba(7, 118, 253, 1)",
    },
  ];
  return (
    <div className="w-full h-20 mt-6">
      <div className="flex gap-2 items-center justify-center m-2 p-2  flex-wrap">
        {store.map((item, index) => (
          <section
            className=" p-2 rounded-md font-bold "
            key={item.id}
            style={{ backgroundColor: item.bgColor, color: item.textcolor }}
          >
            {item.name}
          </section>
        ))}
      </div>
    </div>
  );
}
