const Cars = () => {
  const carsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      carName: "Mustang Gt",
      rent: "180$",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1620157206955-5d8ebca0df95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      carName: "BMW",
      rent: "180$",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      carName: "Sport Car",
      rent: "180$",
    },
  ];

  return (
    <>
      <p>Available Cars</p>
      <div>
         
        {carsData.map(({ id, image, carName, rent }) => {
          return (
            <div
              key={id}
              className="flex items-center justify-between my-1 bg-emerald-50 rounded-md p-2 text-center"
            >
              <img src={image} alt={carName} className="w-24 h-24 rounded-md" />
              <p className="w-24 ">{carName}</p>
              <p>{rent}</p>
             
              <div className="flex items-center gap-2">
                <button className="bg-emerald-400 px-4 py-0.5 rounded-sm hover:bg-emerald-500">
                  Edit
                </button>
                <button className="bg-red-400 px-4 py-0.5 rounded-sm hover:bg-red-500">
                  Delete
                </button>
              </div>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cars;
