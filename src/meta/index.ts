export const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

export const grant = async () => {
  window.fbq("consent", "grant");
};

export const revoke = async () => {
  window.fbq("consent", "revoke");
};

export const init = async () => {
  window.fbq("init", META_PIXEL_ID);
  window.fbq("consent", "revoke");
};

export const pageView = async () => {
  window.fbq("track", "PageView");
};

export const event = async (name: string, options?: object) => {
  window.fbq("track", name, options);
};
