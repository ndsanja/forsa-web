type sectionTitle = {
  sectionTitle: string;
};

const SectionTitle = (props: sectionTitle) => {
  const { sectionTitle } = props;
  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <div className="border h-[1px]  w-5 md:w-12 lg:w-20 border-black bg-black" />
      <h1 className="font-dinamit-extralight text-headline-large">
        {sectionTitle}
      </h1>
    </div>
  );
};

export default SectionTitle;
