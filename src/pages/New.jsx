import { useLocation } from "react-router-dom";

const New = () => {
  const { state } = useLocation();
  const { pageNew } = state;
  return (
    <main className="min-h-[calc(100vh-160px-112px)] px-10 pb-10  max-w-5xl mx-auto flex flex-col">
      <section className="flex items-end w-full px-10 pt-20 pb-10 bg-gray-600 text-white justify-between">
        <h1 className="text-6xl text-start">{pageNew.title}</h1>
      </section>
      <img src={pageNew.img} />
      <p className="text-end text-opacity-10">{pageNew.date}</p>
      <h5 className="mt-4 text-xl first-letter:capitalize first-letter:text-4xl">
        {pageNew.description}
      </h5>
      {pageNew.section.map((section, index) => (
        <div key={index} className="w-full flex items-center">
          <div className="flex flex-wrap">
            <h3>{section.title}</h3>
            <p className="text-end text-opacity-10 first-letter:capitalize">
              {section.description}
            </p>
          </div>

          <img className="float-start w-1/3" src={section.img} />
        </div>
      ))}
    </main>
  );
};

export default New;
