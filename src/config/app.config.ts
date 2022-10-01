export default () => ({
  app: {
    name: '张鸿运',
    isDev: process.env.NODE_ENV === 'development',
  },
  upload: {
    exts: 'jpeg,png,jpg',
  },
})
