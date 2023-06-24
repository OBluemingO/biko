const SectionDetail = () => {
  return (
    <div className="w-full h-auto lg:h-[754px] my-[150px] px-[3%] flex flex-col lg:flex-row">
      <div className="basis-1/4 px-4 py-8  hover:basis-2/4 transition-all flex flex-col justify-between">
        <div className="header text-5xl">
          Lorem impsum dolor sit amet, consectetur
        </div>
        <div className="body pt-5 md:pt-0 line-clamp-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor non
          culpa aliquam doloremque ullam error, enim ducimus dignissimos quis
          molestias animi repudiandae ea sint facere corporis quibusdam natus et
          esse.
        </div>
      </div>
      <div className="basis-1/4 border-l-[1px] px-4 py-8  hover:basis-2/4 transition-all flex flex-col justify-between">
        <div className="header text-xl">
          <div className="mb-2">01.</div>
          <div className="text-5xl font-semibold">Seat</div>
        </div>
        <div className="body line-clamp-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor non
          culpa aliquam doloremque ullam error, enim ducimus dignissimos quis
          molestias animi repudiandae ea sint facere corporis quibusdam natus et
          esse.
        </div>
      </div>
      <div className="basis-1/4 border-l-[1px] px-4 py-8  hover:basis-2/4 transition-all flex flex-col justify-between">
        <div className="header text-xl">
          <div className="mb-2">02.</div>
          <div className="text-5xl font-semibold">Handle</div>
        </div>
        <div className="body ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor non
          culpa aliquam doloremque ullam error, enim ducimus dignissimos quis
          molestias animi repudiandae ea sint facere corporis quibusdam natus et
          esse.
        </div>
      </div>
      <div className="basis-1/4 border-l-[1px] px-4 py-8  hover:basis-2/4 transition-all flex flex-col justify-between">
        <div className="header text-xl">
          <div className="mb-2">03.</div>
          <div className="text-5xl font-semibold">Chain</div>
        </div>
        <div className="body ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor non
          culpa aliquam doloremque ullam error, enim ducimus dignissimos quis
          molestias animi repudiandae ea sint facere corporis quibusdam natus et
          esse.
        </div>
      </div>
    </div>
  );
};

export default SectionDetail;
