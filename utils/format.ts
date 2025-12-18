export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;

  // تبدیل عدد به فرمت 3 رقمی با کاما
  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // تبدیل اعداد انگلیسی به فارسی
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const persianFormatted = formatted.replace(
    /\d/g,
    (d) => persianDigits[parseInt(d)]
  );

  return persianFormatted + ' تومان';
};



export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
