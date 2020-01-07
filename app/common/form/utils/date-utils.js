export const disableUpToDate = minDate => currentDate => currentDate.isBefore(minDate, 'day')

export const disableSaturdays = currentDate => currentDate.isoWeekday() === 6
