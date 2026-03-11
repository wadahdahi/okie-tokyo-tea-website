interface TitleProps {
  title: string;
}

interface TitleType {
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

const Titles = ({ title }: TitleType) => {
  {
    titlesData.map((title) => (
      <h3 className="title text-[24px]">{title.title}</h3>
    ));
  }
};

export default Titles;
