const today = new Date();

const [year, month, date] = [
  today.getFullYear(),
  today.getMonth() +1,
  today.getDate(),
];

console.log(year + '年' + month + '月' + date + '日');
