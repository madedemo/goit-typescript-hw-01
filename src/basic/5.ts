enum DayofWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

const isWeekend = (day: DayofWeek): boolean => {
    return day === DayofWeek.SATURDAY || day === DayofWeek.SUNDAY
}