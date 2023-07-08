export const priceMixin = {
  methods: {
    formatPrice(price, currency) {
      return price.toLocaleString('es-AR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
  },
};
