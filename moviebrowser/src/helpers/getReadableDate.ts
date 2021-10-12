export const getReadableDate = (data: string) => {
    const date = new Date(data);
    // debugger;
    // const day = date.getDate();
    // const month = date.getMonth();
    // const year = date.getFullYear();
    const formattedDate = date.toDateString()
    return formattedDate;
}