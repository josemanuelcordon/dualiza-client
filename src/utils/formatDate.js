  //Debe de ir en la carpeta utils
  const formatDate = (dateNotFormatted) => {
    const date = new Date(dateNotFormatted);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;

    return `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year}`;
  };

  export default formatDate;