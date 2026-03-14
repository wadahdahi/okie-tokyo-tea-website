interface TitleProps {
  title: string;
}


export const titlesData: TitleProps[] = [
  {
    title: "Title 01",
  },
  {
    title: "Title 02",
  },
  {
    title: "Title 03",
  },
  {
    title: "Title 04",
  },
  {
    title: "Title 05",
  },
  {
    title: "Title 06",
  },
];

const Titles = () => {
  return (
    <>
      {titlesData.map((item, index) => (
        <h3 key={index} className="title text-[24px]">
          {item.title}
        </h3>
      ))}
    </>
  );
};

export default Titles;


