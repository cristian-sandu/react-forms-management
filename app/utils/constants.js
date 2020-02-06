export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const ensureArray = data => (Array.isArray(data) ? data : [data]);
export const addKey = data =>
  data.map(entity => ({ ...entity, key: entity._id }));
