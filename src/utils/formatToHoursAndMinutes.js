export function formatToHoursAndMinutes(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    return `${hours} שעות ו-  ${minutes} דקות`;
}