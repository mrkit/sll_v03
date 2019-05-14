  const dateStamp = () => {
    const currentDate = new Date(),
      date = currentDate.getDate(),
      month = currentDate.getMonth()+1,
      year = currentDate.getFullYear();

    const pad = month => month < 10 ? '0'+month : month;

    return `${pad(month)}/${date}/${year}`
  }
  
  export default dateStamp;