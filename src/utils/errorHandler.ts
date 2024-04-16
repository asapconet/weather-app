
import Status from '@/types/alertStatusEnum';

export const ErrorHandler = (data: any) => {

  if (data !== undefined) {
    if (data.success) {
      console.log(data.message);
    } else if (data.errors) {
      Object.keys(data.errors).forEach((key) => {
        Object.values(data.errors[key]).forEach((error) => {
          console.log(error as string, Status.error);
        });
      });
    } else {
      console.log(data.message as string, Status.error);
    }
  }
};
