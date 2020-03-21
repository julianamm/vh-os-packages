export const requiredField = val =>
val !== 'undefined' && val !== '';


export const getFormatedDate = date => {
    let result = ''
    if (date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        result = [year, month, day].join('-');
    }
    return result
}