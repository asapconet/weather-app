  export const fullDayFormat = (secs: number) => {
    const millisecond = secs * 1000;
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const format = new Date(millisecond).toLocaleDateString("en-US", options);
    return format;
  };

  export const timeFormatter = (secs: number) => {
    const millisecond = secs * 1000;
    const options: Intl.DateTimeFormatOptions = {
      minute: "numeric",
      hour: "numeric",
    };
    const format = new Date(millisecond).toLocaleTimeString("en-US", options);
    return format;
  };