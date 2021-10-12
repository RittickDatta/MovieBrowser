export const getTimeInHoursMins = (mins: number) => {
    const hours = Math.floor(mins / 60);
    const minutes = mins - (hours * 60);
    return `${hours}hr ${minutes}mins`
}