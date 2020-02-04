const successNotification = message => ({
  message,
  type: 'success',
  duration: 5,
  placement: 'bottomRight',
});

const errorNotification = message => ({
  message,
  type: 'error',
  duration: 5,
  placement: 'bottomRight',
});

export { successNotification, errorNotification };
